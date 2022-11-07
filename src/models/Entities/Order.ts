import { OrderModelType } from '../../@types/services/OrderService';

export default class Product {
  id!: number | undefined;

  userId: number;

  constructor({ id, userId }: OrderModelType) {
    this.id = id;
    this.userId = userId;
  }
}