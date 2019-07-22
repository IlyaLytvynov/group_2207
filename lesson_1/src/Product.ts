export enum ProductType {
  Phone,
  Tablet,
  Laptop
}

export interface Product {
  price: number;
  title: string;
  type: ProductType;// number string object
}

export type Products = Array<Product>;
