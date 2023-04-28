import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/order_item";

let customer = new Customer("123", "Luiz Henrique")
const address = new Address("Rua 10", 2, "30416-250", "Belo Horizonte")
customer._address = address
customer.activate()

const item1 = new OrderItem("1", "Item 1", 10)
const item2 = new OrderItem("2", "Item 1", 15)
const order = new Order("1", "123", [item1, item2])