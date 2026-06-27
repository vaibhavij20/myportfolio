export default async function handler(req, res) {
  const { username } = req.query;

  try {
    const response = await fetch('https://leetcode.com/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
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
        variables: { username },
      }),
    });

    const data = await response.json();

    if (data.data && data.data.matchedUser) {
      const stats = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;
      res.json({ success: true, stats });
    } else {
      res.status(404).json({ success: false, error: 'User not found' });
    }
  } catch (error) {
    console.error('LeetCode API error:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch LeetCode data' });
  }
}

export const config = {
  runtime: 'edge',
};
