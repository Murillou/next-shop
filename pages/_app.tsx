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

globalStyles();

function MainApp({ Component, pageProps }: AppProps) {
  const { cart } = useContext(CartContext);

  const totalQuantity = Array.isArray(cart)
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

  return (
    <Dialog.Root>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <ButtonCart>
            <span>{totalQuantity}</span>
            <Handbag size={24} color="#8d8d99" />
          </ButtonCart>
        </Header>

        <Component {...pageProps} />
      </Container>

      <Cart />
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
