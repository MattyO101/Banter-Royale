import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const emailLower = email.trim().toLowerCase();

    // Basic email validation
    if (!emailLower.includes('@') || !emailLower.includes('.')) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Check if email already exists
    const exists = await kv.sismember('subscribers:emails', emailLower);
    
    if (exists) {
      return res.status(200).json({ message: 'Email already subscribed', success: true });
    }

    // Store email with timestamp
    const timestamp = new Date().toISOString();
    await kv.sadd('subscribers:emails', emailLower);
    await kv.hset('subscribers:data', emailLower, timestamp);

    return res.status(201).json({ message: 'Successfully subscribed', success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Failed to subscribe', details: error.message });
  }
}

