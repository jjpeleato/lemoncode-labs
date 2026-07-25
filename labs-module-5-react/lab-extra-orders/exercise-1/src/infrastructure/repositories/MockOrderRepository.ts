import { Order } from "../../domain/entities/Order";
import type { IOrderRepository } from "../../domain/repositories/IOrderRepository";

export class MockOrderRepository implements IOrderRepository {
  async getOrder(): Promise<Order> {
    const order = Order.create(
      {
        number: "PO-2026-0341",
        provider: "Suministros Industriales SA",
        date: "2026-07-20",
      },
      [
        {
          id: "line-1",
          description: "Reactivos maquinaria",
          amount: 2345,
          isValidated: true,
        },
        {
          id: "line-2",
          description: "Recambios impresión",
          amount: 135,
          isValidated: false,
        },
        {
          id: "line-3",
          description: "Soportes plataforma",
          amount: 540,
          isValidated: false,
        },
      ],
    );

    return Promise.resolve(order);
  }
}
