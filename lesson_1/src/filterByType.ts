import { Products, ProductType } from './Product';

export const filterByType = (products: Products, type: ProductType) => (
  products.filter((product) => product.type === type)
);
