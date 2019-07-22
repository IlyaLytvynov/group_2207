import { Product, Products } from './Product';

export const findMostExpencive = (products: Products): Product => products.reduce(
  (itemWithMaxPrice: Product, item: Product) => {
    if (item.price > itemWithMaxPrice.price) {
      return item;
    }
    return itemWithMaxPrice;
  }, products[0]);
