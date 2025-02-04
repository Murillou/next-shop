import { globalStyles } from '../src/styles/global';
import type { AppProps } from 'next/app';
import logoImg from '../src/assets/logo.svg';
import { ButtonCart, Container, Header } from '../src/styles/pages/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';
import Cart from '../src/components/Cart/Cart';

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Dialog.Root>
      <Container>
        <Header>
          {' '}
          <Image src={logoImg} alt="" />
          <ButtonCart asChild>
            <Handbag size={24} color="#8d8d99" />
          </ButtonCart>
        </Header>

        <Component {...pageProps} />
      </Container>

      <Cart />
    </Dialog.Root>
  );
}
