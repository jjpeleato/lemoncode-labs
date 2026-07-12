import { createContext } from "react";
import type { Cart } from "../../domain/entities/Cart";

export interface CartContextValue {
  cart: Cart;
  toggle: (id: string) => void;
  clear: () => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
