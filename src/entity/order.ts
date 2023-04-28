import { OrderItem } from "./order_item";

export class Order {
  constructor(
    private id: string,
    private customerId: string,
    private items: OrderItem[]
  ) {}
}
