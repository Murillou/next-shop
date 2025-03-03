import { stripe } from '@/src/lib/stripe';
import {
  ImageSuccessContainer,
  SuccessContainer,
} from '@/src/styles/pages/success';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stripe from 'stripe';

interface SucessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
  }[];
}

export default function Success({ customerName, products }: SucessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Next Shop </title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <ImageSuccessContainer>
          {products.map((product, index) => (
            <Image
              key={index}
              src={product.imageUrl}
              width={120}
              height={110}
              alt={product.name}
            />
          ))}{' '}
        </ImageSuccessContainer>
        <h1>Compra efetuada!</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{' '}
          camisetas já está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  });

  const customerName = session.customer_details?.name;
  const products = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product;
    return {
      name: product.name,
      imageUrl: product.images[0],
    };
  });
  return {
    props: {
      customerName,
      products,
    },
  };
};
