import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

import { GetStaticProps } from 'next';
import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from '../src/styles/pages/home';
import { stripe } from '@/src/lib/stripe';
import { toast } from 'react-toastify';
import 'keen-slider/keen-slider.min.css';
import Stripe from 'stripe';
import Link from 'next/link';
import Head from 'next/head';
import { Handbag } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '@/src/context/CartContext';
import { useRouter } from 'next/router';
interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
  }[];
}
export const notify = () =>
  toast.success('Item adicionado ao carrinho!', {
    position: 'top-right',
    autoClose: 1580,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });

export default function Home({ products }: HomeProps) {
  const { addToCart, isSubmitting } = useContext(CartContext);
  const { isFallback } = useRouter();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 10,
    },
    breakpoints: {
      '(min-width: 800px)': {
        slides: {
          perView: 2,
          spacing: 46,
        },
      },
    },
    rubberband: false,
    mode: 'free',
    loop: true,
  });
  if (isFallback) {
    const skeletons = new Array(2).fill(0);
    return (
      <HomeContainer>
        {skeletons.map((_, index) => (
          <Skeleton
            key={index}
            width={696}
            height={656}
            baseColor="#202020"
            highlightColor="#444"
            style={{ marginRight: '3.3rem' }}
          />
        ))}
      </HomeContainer>
    );
  }

  return (
    <>
      <Head>
        <title>Home | Next Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              prefetch={false}
            >
              <Product className="keen-slider__slide">
                <Image
                  src={product.imageUrl}
                  width={520}
                  height={480}
                  alt={''}
                />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(product.price)}
                    </span>
                  </div>

                  <section>
                    <button
                      disabled={isSubmitting[product.id]}
                      onClick={e => {
                        e.preventDefault();
                        addToCart({ ...product, quantity: 1 });
                        notify();
                      }}
                    >
                      <Handbag size={32} color="#fff" weight="bold" />
                    </button>
                  </section>
                </footer>
              </Product>
            </Link>
          );
        })}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? price.unit_amount / 100 : 0,
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
