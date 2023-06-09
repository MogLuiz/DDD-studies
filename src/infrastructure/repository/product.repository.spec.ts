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

  it("should be able find a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 100);

    await productRepository.create(product);
    const productFound = await productRepository.find(product.id);

    expect(productFound).toStrictEqual(product);
  })

  it("should be able find all products", async () => {
    const productRepository = new ProductRepository();
    const product1 = new Product("1", "Product 1", 100);
    const product2 = new Product("2", "Product 2", 200);

    await productRepository.create(product1);
    await productRepository.create(product2);

    const products = await productRepository.findAll();

    expect(products.length).toBe(2);
    expect(products).toStrictEqual([product1, product2]);
  })
});
