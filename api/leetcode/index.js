import https from 'https';

export default async function handler(req, res) {
  const { username } = req.query;

  // Handle CORS preflight
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!username) {
    return res.status(400).json({ success: false, error: 'Username is required' });
  }

  const query = JSON.stringify({
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

  const options = {
    hostname: 'leetcode.com',
    path: '/graphql/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(query),
      'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)',
      'Referer': 'https://leetcode.com',
    },
  };

  try {
    const data = await new Promise((resolve, reject) => {
      const httpReq = https.request(options, (lcRes) => {
        let body = '';
        lcRes.on('data', (chunk) => { body += chunk; });
        lcRes.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(new Error('Failed to parse LeetCode response'));
          }
        });
      });

      httpReq.on('error', reject);
      httpReq.setTimeout(9000, () => {
        httpReq.destroy();
        reject(new Error('Request timed out'));
      });
      httpReq.write(query);
      httpReq.end();
    });

    if (!data?.data?.matchedUser) {
      return res.status(404).json({ success: false, error: 'User not found on LeetCode' });
    }

    const stats = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    return res.status(200).json({ success: true, stats });

  } catch (error) {
    console.error('LeetCode API error:', error.message);
    return res.status(500).json({ success: false, error: 'Failed to fetch LeetCode data', detail: error.message });
  }
}
