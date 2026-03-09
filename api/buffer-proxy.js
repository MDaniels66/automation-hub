export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { endpoint, method = 'GET', params } = req.body;

  if (!endpoint) {
    return res.status(400).json({ error: 'Missing endpoint parameter' });
  }

  try {
    let url = `https://api.bufferapp.com${endpoint}`;
    let options = {
      method: method,
      headers: {
        'Accept': 'application/json'
      }
    };

    // For POST requests with form data
    if (method === 'POST' && params) {
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      options.body = params;
    }

    const response = await fetch(url, options);
    const contentType = response.headers.get('content-type');
    
    let data;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    } else {
      const text = await response.text();
      try {
        data = JSON.parse(text);
      } catch (e) {
        data = { error: 'Invalid response from Buffer API', rawResponse: text };
      }
    }

    res.status(response.status).json(data);
  } catch (error) {
    console.error('Buffer proxy error:', error);
    res.status(500).json({ 
      error: error.message,
      details: 'Failed to connect to Buffer API'
    });
  }
}
