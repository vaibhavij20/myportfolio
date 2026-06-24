import { useState, useEffect } from 'react';

export default function LeetCodeCard({ username = "vaibhavij20" }) {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

    // Call local proxy server to bypass CORS
    fetch(`http://localhost:3001/api/leetcode/${username}`, {
      signal: controller.signal,
    })
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(data => {
        clearTimeout(timeoutId);
        if (data.success && data.stats) {
          setStats(data.stats);
        } else {
          throw new Error('Invalid response');
        }
      })
      .catch(err => {
        clearTimeout(timeoutId);
        console.error('Error fetching LeetCode metrics:', err);
        // Fall back to static data on error
        setStats([
          { difficulty: "Easy", count: 25 },
          { difficulty: "Medium", count: 28 },
          { difficulty: "Hard", count: 5 }
        ]);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [username]);

  if (isLoading) {
    return (
      <div className="p-6 rounded-2xl bg-card border border-card-border flex items-center justify-center h-[170px]">
        <div className="text-slate-500 text-sm">Loading LeetCode stats...</div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="p-6 rounded-2xl bg-card border border-card-border flex items-center justify-center h-[170px]">
        <div className="text-slate-500 text-sm">Unable to load LeetCode data</div>
      </div>
    );
  }

  const easy = stats.find(d => d.difficulty === "Easy")?.count || 0;
  const medium = stats.find(d => d.difficulty === "Medium")?.count || 0;
  const hard = stats.find(d => d.difficulty === "Hard")?.count || 0;
  const total = easy + medium + hard;

  const svgCard = `
    <svg width="100%" height="170" viewBox="0 0 350 170" fill="none" xmlns="http://www.w3.org/2000/svg" style="font-family: 'SF Mono', 'Fira Code', monospace;">
      <rect width="350" height="170" rx="10" fill="#14141E"/>
      <text x="20" y="35" fill="#00F0FF" font-size="16" font-weight="bold">${username}'s LeetCode</text>
      
      <text x="20" y="70" fill="#E0E0E0" font-size="14">Total Solved: <tspan font-weight="bold" fill="#00F0FF">${total}</tspan></text>
      <text x="20" y="100" fill="#00B8A3" font-size="12">Easy: ${easy}</text>
      <text x="120" y="100" fill="#FFC01E" font-size="12">Medium: ${medium}</text>
      <text x="230" y="100" fill="#FF375F" font-size="12">Hard: ${hard}</text>
      
      <rect x="20" y="125" width="310" height="8" rx="4" fill="#333"/>
      <rect x="20" y="125" width="${total > 0 ? (easy/total)*310 : 0}" height="8" rx="4" fill="#00B8A3"/>
      <rect x="${20 + (total > 0 ? (easy/total)*310 : 0)}" y="125" width="${total > 0 ? (medium/total)*310 : 0}" height="8" rx="4" fill="#FFC01E"/>
      <rect x="${20 + (total > 0 ? ((easy+medium)/total)*310 : 0)}" y="125" width="${total > 0 ? (hard/total)*310 : 0}" height="8" rx="4" fill="#FF375F"/>
    </svg>
  `;

  return (
    <div className="rounded-2xl border border-card-border overflow-hidden bg-card">
      <div dangerouslySetInnerHTML={{ __html: svgCard }} />
    </div>
  );
}
