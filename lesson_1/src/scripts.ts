import { findMostExpencive } from './findExpensive';
import { calculateTotalPrice } from './totalPrice';
import { filterByType } from './filterByType';
import { ProductType } from './Product';

function t(str: any): any {
  return str.toUpperCase()
}

const products = [
  {
    title: 'Samsung galaxy s8',
    price: 200,
    type: ProductType.Phone
  },
  {
    title: 'Apple Ipad Pro 9.7',
    price: 1000,
    type: ProductType.Tablet
  },
  {
    title: 'Apple Ipad Pro 13.3',
    price: 1500,
    type: ProductType.Tablet
  }
];

const u = findMostExpencive(products);
const total = calculateTotalPrice(products);
const tablets = filterByType(products, ProductType.Tablet);
console.log(tablets);
