export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { query, variables, token } = req.body;

  if (!query || !token) {
    return res.status(400).json({ error: 'Missing query or token parameter' });
  }

  try {
    // Buffer's GraphQL endpoint - using api.buffer.com as per error message
    const response = await fetch('https://api.buffer.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        query: query,
        variables: variables || {}
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(response.status).json({ 
        error: 'GraphQL request failed',
        details: data
      });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Buffer GraphQL proxy error:', error);
    res.status(500).json({ 
      error: error.message,
      details: 'Failed to connect to Buffer GraphQL API'
    });
  }
}
