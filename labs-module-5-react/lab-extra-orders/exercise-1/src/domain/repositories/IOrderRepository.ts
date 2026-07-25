import type { Order } from "../entities/Order";

export interface IOrderRepository {
  getOrder(): Promise<Order>;
}
