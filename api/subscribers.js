import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const emails = await kv.smembers('subscribers:emails');
    const subscribersData = await kv.hgetall('subscribers:data');

    const subscribers = emails.map(email => ({
      email,
      subscribed_at: subscribersData[email] || new Date().toISOString()
    }));

    // Sort by date descending
    subscribers.sort((a, b) => new Date(b.subscribed_at) - new Date(a.subscribed_at));

    return res.status(200).json({
      subscribers,
      total: subscribers.length
    });
  } catch (error) {
    console.error('Get subscribers error:', error);
    return res.status(500).json({ error: 'Failed to get subscribers' });
  }
}

