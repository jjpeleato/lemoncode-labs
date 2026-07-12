import { useState } from 'react';
import type { ReactNode } from 'react';
import { Cart } from '../../domain/entities/Cart';
import { CartContext } from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>(Cart.empty());

  const toggle = (id: string) => {
    setCart((prev) => prev.toggle(id));
  };

  const clear = () => {
    setCart(Cart.empty());
  };

  return (
    <CartContext.Provider value={{ cart, toggle, clear }}>
      {children}
    </CartContext.Provider>
  );
};
