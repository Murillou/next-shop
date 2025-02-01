import {
  ProductDetails,
  ImageContainer,
  ProductContainer,
} from '@/src/styles/pages/product';

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79.90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste possimus
          iusto aperiam nostrum reiciendis nam fuga. Saepe nesciunt adipisci rem
          dignissimos molestias neque modi, necessitatibus et cumque doloremque
          fugit repellendus.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
