import { Product } from '@/src/context/CartContext';
import { CardContainer, CardInfoProduct } from './style';
import Image from 'next/image';

interface CartItemCardProps {
  product: Product;
  removeFromCart: (productId: string) => void;
}

export function CartItemCard({ product, removeFromCart }: CartItemCardProps) {
  return (
    <CardContainer>
      <Image src={product.imageUrl} width={95} height={95} alt="" />

      <CardInfoProduct>
        <p>{product.name}</p>
        <strong>
          {product.price} <span>x {product.quantity}</span>
        </strong>
        <button onClick={() => removeFromCart(product.id)}>Remover</button>
      </CardInfoProduct>
    </CardContainer>
  );
}
