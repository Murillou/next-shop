import * as Dialog from '@radix-ui/react-dialog';
import { Close, Content, ProductBag } from './style';
import { X } from 'phosphor-react';
import { motion } from 'framer-motion';

const cartAnimation = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.4 } },
  exit: { x: '100%', opacity: 0, transition: { duration: 0.3 } },
};

export default function Cart() {
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

          <div>Produtos</div>
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
