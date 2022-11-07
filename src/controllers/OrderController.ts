import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

// import Order from '../models/Entities/Order';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };
}