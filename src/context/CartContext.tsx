import { createContext, ReactNode, useState } from 'react';

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  defaultPriceId: string;
  quantity: number;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  totalPrice: number;
  isSubmitting: { [key: string]: boolean };
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleButtonState = (productId: string, state: boolean) => {
    setIsSubmitting(prev => ({ ...prev, [productId]: state }));

    if (state) {
      setTimeout(() => {
        setIsSubmitting(prev => ({ ...prev, [productId]: false }));
      }, 2000);
    }
  };

  function addToCart(product: Product) {
    if (isSubmitting[product.id]) return;

    handleButtonState(product.id, true);

    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);

      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      const price = parseFloat(
        product.price.toString().replace('R$', '').replace(',', '.')
      );

      const updateCart = [...prevCart, { ...product, price, quantity: 1 }];

      setTimeout(() => {
        console.log(`Reabilitando botão para o produto ${product.name}`);
        setIsSubmitting(prev => ({ ...prev, [product.id]: false }));
      }, 2000);

      return updateCart;
    });
  }

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const totalPrice = cart.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalPrice,
        isSubmitting,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
