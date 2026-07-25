import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import type { OrderContextValue } from "../context/OrderContext";

export const useOrderContext = (): OrderContextValue => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }

  return context;
};
