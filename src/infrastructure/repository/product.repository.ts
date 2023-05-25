import { Product } from "../../domain/entity/product";
import { IProductRepository } from "../../domain/repository/product-repository.interface";
import { ProductModel } from "../db/sequelize/model/product.model";

export class ProductRepository implements IProductRepository {
  async create(entity: Product): Promise<void> {
    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price,
    });
  }

  async update(entity: Product): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async find(id: string): Promise<Product> {
    const productModel = await ProductModel.findOne({ where: { id }});
    
    return new Product(
      productModel.id,
      productModel.name,
      productModel.price
    );
  }

  async findAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}
