import { createContext } from "react";
import type { Cart } from "@/lib/cart";

export interface CartContextValue {
  cart: Cart;
  toggle: (id: string) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
