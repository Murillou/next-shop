import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../src/styles';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />{' '}
      <style>
        {`
              @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
            `}
      </style>
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
