import { OrderItem } from "./order_item";

export class Order {
  constructor(
    private id: string,
    private customerId: string,
    private items: OrderItem[]
  ) {}

  total() {
    return this.items.reduce((acc, item) => acc + item.price, 0)
  }
}
