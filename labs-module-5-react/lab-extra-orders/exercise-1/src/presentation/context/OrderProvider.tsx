import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Order } from '../../domain/entities/Order';
import { GetOrderUseCase } from '../../application/use-cases/GetOrderUseCase';
import { MockOrderRepository } from '../../infrastructure/repositories/MockOrderRepository';
import { OrderContext } from './OrderContext';

const orderRepository = new MockOrderRepository();
const getOrderUseCase = new GetOrderUseCase(orderRepository);

interface OrderProviderProps {
  children: ReactNode;
}

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isActive = true;

    const fetchOrder = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await getOrderUseCase.execute();
        if (!isActive) return;
        setOrder(result);
      } catch (err) {
        if (!isActive) return;
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (isActive) setIsLoading(false);
      }
    };

    fetchOrder();

    return () => {
      isActive = false;
    };
  }, []);

  const updateLineAmount = (lineId: string, amount: number) => {
    setOrder((prev) => prev?.updateLineAmount(lineId, amount) ?? prev);
  };

  const validateLines = (lineIds: string[]) => {
    setOrder((prev) => prev?.validateLines(lineIds) ?? prev);
  };

  const invalidateLines = (lineIds: string[]) => {
    setOrder((prev) => prev?.invalidateLines(lineIds) ?? prev);
  };

  return (
    <OrderContext.Provider
      value={{ order, isLoading, error, updateLineAmount, validateLines, invalidateLines }}
    >
      {children}
    </OrderContext.Provider>
  );
};
