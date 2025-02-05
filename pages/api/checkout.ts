import { stripe } from '@/src/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { products } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!products || products.length === 0) {
    return res.status(400).json({ error: 'Products not found' });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  try {
    const checkoutSession = await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: products.map((product: { priceId: any; quantity: any }) => ({
        price: product.priceId,
        quantity: product.quantity,
      })),
    });

    return res.status(201).json({
      checkoutUrl: checkoutSession.url,
    });
  } catch (error) {
    console.error('Stripe error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
