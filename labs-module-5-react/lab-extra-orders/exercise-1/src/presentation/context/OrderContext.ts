import { createContext } from "react";
import type { Order } from "../../domain/entities/Order";

export interface OrderContextValue {
  order: Order | null;
  isLoading: boolean;
  error: string | null;
  updateLineAmount: (lineId: string, amount: number) => void;
  validateLines: (lineIds: string[]) => void;
  invalidateLines: (lineIds: string[]) => void;
}

export const OrderContext = createContext<OrderContextValue | null>(null);
