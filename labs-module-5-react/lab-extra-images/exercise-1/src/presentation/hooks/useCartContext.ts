import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import type { CartContextValue } from "../context/CartContext";

export const useCartContext = (): CartContextValue => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
