import { HomeContainer, Product } from '../src/styles/pages/home';
import { styled } from '../src/styles';
import Image from 'next/image';

import camiseta1 from '../src/assets/shirts/1.png';
import camiseta2 from '../src/assets/shirts/3.png';
import camiseta3 from '../src/assets/shirts/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt={''} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt={''} />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79.90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
