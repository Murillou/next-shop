import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, ProductBag } from './style';
import { X } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '@/src/context/CartContext';
import Image from 'next/image';
import { CartItemCard } from './CartItemsCard/CartItemsCard';

const cartAnimation = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
};

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  console.log(cart);
  return (
    <Dialog.Portal>
      <Content
        as={motion.div}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={cartAnimation}
      >
        <Close asChild>
          <X size={25} />
        </Close>
        <ProductBag>
          <h1>Sacola de compras</h1>

          <div>
            {cart.length === 0 ? (
              <p>Seu carrinho está vázio :c</p>
            ) : (
              <>
                {cart.map(item => (
                  <CartItemCard
                    key={item.id}
                    product={item}
                    removeFromCart={removeFromCart}
                  />
                ))}
              </>
            )}
          </div>
        </ProductBag>

        <section>
          <div>
            <p>Quantidade</p>
            <p>3 itens</p>
          </div>

          <div>
            <strong>Valor total</strong>
            <span>R$ 270.00</span>
          </div>

          <button>Finalizar compra</button>
        </section>
      </Content>
    </Dialog.Portal>
  );
}
