import * as Dialog from '@radix-ui/react-dialog';
import { CartEmpty, Close, Content, ProductBag } from './style';
import { SmileySad, X } from 'phosphor-react';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { CartContext } from '@/src/context/CartContext';
import Image from 'next/image';
import { CartItemCard } from './CartItemsCard/CartItemsCard';
import axios from 'axios';
import { toast } from 'react-toastify';

const cartAnimation = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
};

export default function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);
  const [isCheckoutSessionCreate, setIsCheckoutSessionCreate] = useState(false);
  const [isNotifying, setIsNotifying] = useState(false);

  function notifyEmptyCart() {
    if (!isNotifying) {
      setIsNotifying(true);
      toast.info('O seu carrinho está vazio.', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
        onClose: () => setIsNotifying(false),
      });
    }
  }

  async function handleBuyProduct() {
    if (cart.length === 0) {
      notifyEmptyCart();
      return;
    }

    try {
      setIsCheckoutSessionCreate(true);

      const response = await axios.post('/api/checkout', {
        products: cart.map(product => ({
          priceId: product.defaultPriceId,
          quantity: product.quantity,
        })),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      toast.error('Erro ao processar a compra. Tente novamente mais tarde.');
    } finally {
      setIsCheckoutSessionCreate(false);
    }
  }

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

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
              <CartEmpty>
                <h1>Uuuups, sua sacola está vazia.</h1>
                <SmileySad size={200} />
              </CartEmpty>
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
            <p>{totalQuantity} itens</p>
          </div>

          <div>
            <strong>Valor total</strong>
            <span>{totalPrice.toFixed(2)}</span>
          </div>

          <button onClick={handleBuyProduct}>Finalizar compra</button>
        </section>
      </Content>
    </Dialog.Portal>
  );
}
