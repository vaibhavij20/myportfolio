import axios from 'axios';

export default async function handler(req, res) {
  const { username } = req.query;

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (!username) {
    return res.status(400).json({ success: false, error: 'Username is required' });
  }

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
    }, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 8000
    });

    const stats = response.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    res.json({ success: true, stats });
  } catch (error) {
    console.error('LeetCode API error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch LeetCode data' });
  }
}
