# Deployment Guide - Vaibhavi Portfolio

## Production Deployment Options

### Option 1: Vercel (Recommended - Free & Easiest)

**For Frontend Only:**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**For Full Stack (with LeetCode Proxy):**
Since Vercel doesn't support Express.js servers, you'll need to use Vercel Serverless Functions:

1. Create `api/leetcode/[username].js`:
```javascript
import axios from 'axios';

export default async function handler(req, res) {
  const { username } = req.query;
  
  try {
    const response = await axios.post('https://leetcode.com/graphql/', {
      query: `
        query userProblemsSolved($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
          }
        }
      `,
      variables: { username }
    });
    
    const stats = response.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    res.json({ success: true, stats });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch' });
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
};
```

2. Update frontend to call `/api/leetcode/${username}` instead of localhost:3001
3. Deploy with `vercel`

### Option 2: Netlify (Free)

**For Frontend Only:**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

**For Full Stack:**
Use Netlify Functions - similar to Vercel serverless functions.

### Option 3: Railway/Render (Full Stack Support)

These platforms support Node.js servers:

**Railway:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

**Render:**
1. Connect your GitHub repo
2. Select "Web Service"
3. Build command: `npm install && npm run build`
4. Start command: `node server.js`
5. Add environment variable: `PORT=3001`

### Option 4: DigitalOcean/AWS (Full Control)

For complete control and custom domains:

**DigitalOcean App Platform:**
1. Create app from GitHub repo
2. Configure build and start commands
3. Set environment variables
4. Deploy

## Production Checklist

### Before Deployment:
- [ ] Update all placeholder links (resume, social profiles)
- [ ] Test all forms (Web3Forms integration)
- [ ] Verify all project links work
- [ ] Check responsive design on mobile
- [ ] Test LeetCode proxy functionality
- [ ] Update favicon and meta tags in index.html

### Environment Variables:
- `WEB3FORMS_ACCESS_KEY` (if not hardcoded)
- `PORT` (for server deployment)

### Performance Optimization:
- Enable gzip compression
- Set up CDN for static assets
- Implement caching headers
- Optimize images
- Minify CSS/JS (Vite does this automatically)

### SEO Optimization:
- Add meta description in index.html
- Add Open Graph tags
- Add Twitter Card tags
- Generate sitemap.xml
- Add robots.txt

### Security:
- Use HTTPS (automatic on most platforms)
- Implement rate limiting for API endpoints
- Sanitize user inputs
- Keep dependencies updated

## Recommended Production Setup

**Best for your use case: Vercel with Serverless Functions**

1. Move the LeetCode proxy to Vercel serverless function
2. Deploy frontend to Vercel
3. Use Vercel's built-in CDN and HTTPS
4. Set up custom domain
5. Enable analytics

This gives you:
- Free hosting
- Automatic HTTPS
- Global CDN
- Easy deployments
- Preview environments
- Built-in analytics

## Domain Setup

After deployment:
1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel dashboard: Settings → Domains → Add Domain
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

## Monitoring

Set up:
- Vercel Analytics (built-in)
- Google Analytics (add to index.html)
- Error tracking (Sentry - optional)

## Backup Strategy

- Code is in GitHub (already backed up)
- For data: none needed (static content)
- For forms: Web3Forms handles submissions
