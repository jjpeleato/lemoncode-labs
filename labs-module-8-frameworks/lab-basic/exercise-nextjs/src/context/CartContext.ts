import { createContext } from "react";
import type { Cart } from "@/lib/cart";

export interface CartContextValue {
  cart: Cart;
  toggle: (id: string) => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
