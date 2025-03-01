import { CartContext } from '@/src/context/CartContext';
import { stripe } from '@/src/lib/stripe';
import {
  ProductDetails,
  ImageContainer,
  ProductContainer,
} from '@/src/styles/pages/product';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import Stripe from 'stripe';
import { notify } from '..';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
    quantity: number;
  };
}

export default function Product({ product }: ProductProps) {
  const { addToCart, isSubmitting } = useContext(CartContext);
  const { isFallback } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState<
    ProductProps['product'] | null
  >(null);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        setProductData(product);
        setIsLoading(false);
      }, 1000);
    } else {
      setProductData(product);
      setIsLoading(false);
    }
  }, [product]);

  if (isFallback || isLoading) {
    return (
      <ProductContainer>
        <Skeleton
          width="100%"
          height={656}
          baseColor="#202020"
          highlightColor="#444"
        />

        <ProductDetails>
          <Skeleton
            width={500}
            height={32}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginTop: '-1rem' }}
          />
          <Skeleton
            width={150}
            height={35}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginTop: '-1.5rem' }}
          />
          <Skeleton
            width={550}
            height={180}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginTop: '-1.5rem' }}
          />
          <Skeleton
            width={550}
            height={48}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginTop: '-1.5rem' }}
          />
        </ProductDetails>
      </ProductContainer>
    );
  }

  return (
    <>
      <Head>
        <title>{product.name} | Next Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span> {product.price}</span>

          <p>{product.description}</p>

          <button
            disabled={isSubmitting[product.id]}
            onClick={e => {
              e.preventDefault();
              addToCart({ ...product, quantity: 1 });
              notify();
            }}
          >
            {' '}
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_Rh2yEUyOVs3aTL',
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    };
  }
  const productId = params.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: productId,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  };
};
