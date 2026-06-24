# Deployment Guide — Vaibhavi Portfolio

This document explains how the LeetCode Live Telemetry feature works in production and how to deploy the site correctly on Vercel.

---

## How LeetCode Live Telemetry Works

The portfolio fetches your real-time LeetCode stats using a **Vercel Serverless Function** located at `api/leetcode/index.js`.

```
Browser (React) → /api/leetcode?username=vaibhavij20 → Vercel Serverless Function → LeetCode GraphQL API
```

- **In development** (`npm run dev`): The frontend calls `http://localhost:3001/api/leetcode/:username` — handled by the local Express proxy in `server.js` to bypass CORS.
- **In production** (Vercel): The frontend calls `/api/leetcode?username=vaibhavij20` — handled by `api/leetcode/index.js` running as a Vercel Serverless Function (Node.js 20.x).

The environment switch is automatic — it uses `import.meta.env.DEV` in the React components.

---

## Files That Matter

| File | Purpose |
|------|---------|
| `api/leetcode/index.js` | Vercel serverless function — proxies request to LeetCode GraphQL |
| `vercel.json` | Vercel routing config — routes `/api/leetcode` to the function, all other paths to `index.html` |
| `server.js` | Local Express proxy (dev only) — not deployed |
| `src/components/LeetCodeCard.jsx` | React component — fetches and renders the stats card |
| `src/sections/Hero.jsx` | Hero section — also fetches total solved count |

---

## Deploying to Vercel (Step-by-Step)

### Step 1 — Push your code to GitHub

```bash
git push origin main
```

This triggers an automatic Vercel build if your GitHub repo is already connected.

### Step 2 — Connect your GitHub repo to Vercel (first time only)

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"**.
3. Select **`vaibhavij20/myportfolio`** from the list.
4. Vercel auto-detects Vite. Confirm these build settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **Deploy**.

> The `vercel.json` file in the repo handles all routing automatically — no manual configuration needed in the Vercel dashboard.

### Step 3 — Verify the Serverless Function is working

After deployment, test the API endpoint directly in your browser or with curl:

```bash
curl https://YOUR-VERCEL-URL.vercel.app/api/leetcode?username=vaibhavij20
```

You should get a response like:

```json
{
  "success": true,
  "stats": [
    { "difficulty": "All", "count": 284 },
    { "difficulty": "Easy", "count": 104 },
    { "difficulty": "Medium", "count": 157 },
    { "difficulty": "Hard", "count": 23 }
  ]
}
```

---

## Why This Setup Works

### The `axios` Problem (Fixed)
The old `api/leetcode/index.js` used `import axios from 'axios'`. Vercel serverless functions are bundled separately from the frontend and can have issues with ESM axios in certain runtime configurations.

**Fix**: The serverless function now uses Node.js's built-in `https` module — zero external dependencies, always available, fully reliable.

### The Routing Problem (Fixed)
Without `vercel.json`, Vercel didn't know:
- That `/api/leetcode` should route to the serverless function
- That all other paths (like `/`, `/about`) should serve `index.html` (SPA fallback)

**Fix**: `vercel.json` now explicitly configures both.

### LeetCode CORS (Handled)
LeetCode's GraphQL API blocks direct browser requests due to CORS. The serverless function acts as a **server-side proxy** — it makes the request from a server (not a browser), so CORS headers are irrelevant. The function then responds to the browser with the data.

---

## Running Locally

```bash
npm run dev
```

This runs both the Vite dev server and the Express proxy server (`server.js`) concurrently. LeetCode stats will be fetched through `localhost:3001`.

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Stats show placeholder (25/28/5) | API call failed, fallback triggered | Check browser console for errors |
| `/api/leetcode` returns 404 on Vercel | `vercel.json` not deployed | Ensure `vercel.json` is committed and pushed |
| `/api/leetcode` returns 500 | LeetCode blocked the request | Check function logs in Vercel dashboard |
| Stats show "Loading..." forever | Timeout hit (10s) | LeetCode is slow — check Vercel function logs |
| Vercel function not appearing | `api/` folder not in git | Run `git status` and ensure `api/` is tracked |
