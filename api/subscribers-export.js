import { kv } from '@vercel/kv';

export default async function handler(req, res) {
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

    // Create CSV
    let csv = 'Email,Subscribed At\n';
    subscribers.forEach(sub => {
      csv += `${sub.email},${sub.subscribed_at}\n`;
    });

    const filename = `subscribers_${new Date().toISOString().split('T')[0]}.csv`;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    return res.status(200).send(csv);
  } catch (error) {
    console.error('Export subscribers error:', error);
    return res.status(500).json({ error: 'Failed to export subscribers' });
  }
}

