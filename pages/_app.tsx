import { globalStyles } from '../src/styles/global';
import type { AppProps } from 'next/app';

globalStyles();

import logoImg from '../src/assets/logo.svg';
import { Container, Header } from '../src/styles/pages/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        {' '}
        <img src={logoImg.src} alt="" />{' '}
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
