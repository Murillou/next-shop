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
import { useContext } from 'react';
import { CartContext } from '@/src/context/CartContext';
interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    defaultPriceId: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
    },
  });

  const { addToCart, isSubmitting } = useContext(CartContext);
  const notify = () =>
    toast.success('Item adicionado ao carrinho!', {
      position: 'top-right',
      autoClose: 1700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

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
