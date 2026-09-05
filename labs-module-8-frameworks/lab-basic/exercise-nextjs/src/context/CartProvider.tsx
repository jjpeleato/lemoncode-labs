'use client';

import { Cart } from '@/lib/cart';
import { CartContext } from './CartContext';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>(Cart.empty());
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (id: string) => {
    setCart((prev) => prev.toggle(id));
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <CartContext.Provider value={{ cart, toggle, isOpen, open, close }}>
      {children}
    </CartContext.Provider>
  );
}
