import { globalStyles } from '../src/styles/global';
import type { AppProps } from 'next/app';
import logoImg from '../src/assets/logo.svg';
import { Container, Header } from '../src/styles/pages/app';
import Image from 'next/image';
import { Handbag } from 'phosphor-react';

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        {' '}
        <Image src={logoImg} alt="" />
        <section>
          <Handbag size={24} color="#8d8d99" />
        </section>
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
