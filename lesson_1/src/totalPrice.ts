import { Product, Products } from './Product';

export const calculateTotalPrice = (products: Products): number => {
  return products.reduce((total: number, item: Product) => {
    return total + item.price;
  }, 0);
};
