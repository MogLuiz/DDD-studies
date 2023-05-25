import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../db/sequelize/model/product.model";
import { Product } from "../../domain/entity/product";
import { ProductRepository } from "./product.repository";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 100);

    await productRepository.create(product);
    const productModel = await ProductModel.findOne({ where: { id: product.id }});

    expect(productModel.toJSON()).toStrictEqual({
      id: product.id,
      name: product.name,
      price: product.price,
    });
  });

  it("should be able update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 100);

    await productRepository.create(product);
    
    product.changeName("Product 2");
    product.changePrice(200);
    
    await productRepository.update(product);
    
    const productModel = await ProductModel.findOne({ where: { id: product.id }});
    
    expect(productModel.toJSON()).toStrictEqual({
      id: product.id,
      name: "Product 2",
      price: 200,
    });
  })
});
