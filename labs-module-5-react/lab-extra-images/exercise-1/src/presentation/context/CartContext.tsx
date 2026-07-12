import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { Cart } from '../../domain/entities/Cart';

export interface CartContextValue {
  cart: Cart;
  toggle: (id: string) => void;
  clear: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);

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
