import { globalStyles } from '../src/styles/global';
import type { AppProps } from 'next/app';
import logoImg from '../src/assets/logo.svg';
import { ButtonCart, Container, Header } from '../src/styles/pages/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import Cart from '../src/components/Cart/Cart';
import { CartContext, CartProvider } from '@/src/context/CartContext';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

globalStyles();

function MainApp({ Component, pageProps }: AppProps) {
  const { cart } = useContext(CartContext);
  const router = useRouter();
  const { isFallback } = useRouter();

  const totalQuantity = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;
  const isSuccessPage = router.pathname === '/success';

  return (
    <Dialog.Root>
      <Container>
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header
          style={{ justifyContent: isSuccessPage ? 'center' : 'space-between' }}
        >
          <Link href="/">
            {isFallback ? (
              <Skeleton
                width={'7rem'}
                height={50}
                baseColor="#202020"
                highlightColor="#444"
              />
            ) : (
              <Image src={logoImg} alt="Logo" />
            )}
          </Link>
          {!isSuccessPage &&
            (isFallback ? (
              <Skeleton
                width={48}
                height={48}
                baseColor="#202020"
                highlightColor="#444"
              />
            ) : (
              <ButtonCart>
                <span>{totalQuantity}</span>
                <Handbag size={24} color="#8d8d99" />{' '}
              </ButtonCart>
            ))}
        </Header>

        <Component {...pageProps} />
      </Container>

      {!isSuccessPage && <Cart />}
      <ToastContainer />
    </Dialog.Root>
  );
}

export default function App(props: AppProps) {
  return (
    <CartProvider>
      <MainApp {...props} />
    </CartProvider>
  );
}
