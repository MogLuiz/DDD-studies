import { Product } from './product';


describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      const product = new Product("", "Product 1", 100)
    }).toThrowError("Id is required")
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      const product = new Product("123", "", 100)
    }).toThrowError("Name is required")
  });
});