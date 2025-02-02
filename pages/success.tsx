import {
  ImageSuccessContainer,
  SuccessContainer,
} from '@/src/styles/pages/success';
import Link from 'next/link';

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageSuccessContainer></ImageSuccessContainer>

      <p>
        Uhuul <strong>Murillo Vinícius</strong>, sua{' '}
        <strong>Camise Ignite</strong> já está a caminho da sua casa.
      </p>
      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  );
}
