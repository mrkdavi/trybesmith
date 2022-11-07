import OrderModel from '../models/OrderModel';
import connection from '../models/connection';
import Order from '../models/Entities/Order';

export default class OrderService {
  constructor(private orderModel = new OrderModel(connection)) {}
  
  getAll = async (): Promise<Order[]> => {
    console.log('opa');
    const order: Order[] = await this.orderModel.getAll();
    return order;
  };
}