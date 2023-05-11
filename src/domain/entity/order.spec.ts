import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Order("", "123", []);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", []);
    }).toThrowError("customerId is required");
  });

  it("should throw error when item is empty", () => {
    expect(() => {
      new Order("123", "123", []);
    }).toThrowError("Items are required");
  });

  it("should calculate total", () => {
    const item = new OrderItem("i1", "Item 1", 100, "p1", 2);
    const item2 = new OrderItem("i2", "Item 2", 500, "p2", 2);
    const oder = new Order("order1", "customer1", [item, item2]);

    const total = oder.total();

    expect(total).toBe(1200);
  });

  it("should throw error if the item quantity is greater than zero", () => {
    expect(() => {
      const item = new OrderItem("i1", "Item 1", 100, "p1", 0);
      new Order("order1", "customer1", [item]);
    }).toThrowError("Quantity must be grater than zero");
  });
});
