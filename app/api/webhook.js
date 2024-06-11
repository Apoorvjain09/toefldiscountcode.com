import { buffer } from 'micro';
import Razorpay from 'razorpay';
import fetch from 'node-fetch';

export const config = {
  api: {
    bodyParser: false,
  },
};

// Use the provided webhook secret directly in the code
const webhookSecret = 'webhooksecrectdontuse4123';

export default async function handler(req, res) {
  const reqBuffer = await buffer(req);
  const signature = req.headers['x-razorpay-signature'];

  let event;

  try {
    event = Razorpay.validateWebhookSignature(reqBuffer, signature, webhookSecret);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  const { payload } = event;

  if (event.event === 'payment.captured') {
    const payment = payload.payment.entity;
    const userId = payment.notes.userId; // Extract userId from payment notes
    const membershipType = '6Month_Membership'; // or 'Monthly_Subscription' based on your logic

    if (userId) {
      try {
        const response = await fetch('https://toefldiscountcode-com.vercel.app/api/updateMembership', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, membershipType }),
        });

        const result = await response.json();
        if (result.success) {
          console.log('User metadata updated successfully');
        } else {
          console.error('Failed to update user metadata:', result.message);
        }
      } catch (error) {
        console.error('Error updating user metadata:', error);
      }
    }
  }

  res.status(200).send('Success');
}
