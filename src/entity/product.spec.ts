import { Product } from "./product";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is less than zero", () => {
    expect(() => {
      new Product("123", "Produto 1", -20);
    }).toThrowError("Price must be greater than zero");
  });

  it("should change name", () => {
     const newProductName = "NewName"
     const product = new Product("123", "Produto 1", 100);
   
     product.changeName(newProductName)

     expect(product.sumary().name).toBe(newProductName)
  });
});
