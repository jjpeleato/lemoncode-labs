import type { Order } from "../../domain/entities/Order";
import type { IOrderRepository } from "../../domain/repositories/IOrderRepository";

export class GetOrderUseCase {
  private readonly orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  async execute(): Promise<Order> {
    return this.orderRepository.getOrder();
  }
}
