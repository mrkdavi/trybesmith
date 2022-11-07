import { ProductModelType } from '../../@types/services/ProductService';

export default class Product {
  id!: number | undefined;

  name: string;
  
  amount: string;

  orderId?: number;

  constructor({ id, name, amount, orderId }: ProductModelType) {
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.orderId = orderId;
  }
}