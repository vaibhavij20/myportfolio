import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// LeetCode proxy endpoint
app.get('/api/leetcode/:username', async (req, res) => {
  const { username } = req.params;

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
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.data || !response.data.data || !response.data.data.matchedUser) {
      return res.status(404).json({ success: false, error: 'User not found on LeetCode' });
    }

    const stats = response.data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
    res.json({ success: true, stats });
  } catch (error) {
    console.error('LeetCode API error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to fetch LeetCode data' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
