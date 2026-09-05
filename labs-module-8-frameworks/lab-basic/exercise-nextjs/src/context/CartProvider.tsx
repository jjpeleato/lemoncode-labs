'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';
import { Cart } from '@/lib/cart';
import { CartContext } from './CartContext';

interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Cart>(Cart.empty());

  const toggle = (id: string) => {
    setCart((prev) => prev.toggle(id));
  };

  return <CartContext.Provider value={{ cart, toggle }}>{children}</CartContext.Provider>;
}
