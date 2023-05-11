import { Product } from "../entity/product";

export class ProductService {
  static increasePriceInPercentage(products: Product[], percentage: number): Product[] {
    products.forEach((product) => {
      product.changePrice(
        (product.summary().price * percentage) / 100 + product.summary().price
      );
    });

    return products;
  }
}
