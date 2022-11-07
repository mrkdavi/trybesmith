import { Pool, RowDataPacket } from 'mysql2/promise';
import Order from './Entities/Order';

export default class OrderModel {
  constructor(private connection: Pool) { }

  getAll = async (): Promise<Order[]> => {
    const [result] = await this.connection
      .execute<(Order & RowDataPacket)[]>(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
        FROM Trybesmith.Orders o
        INNER JOIN Trybesmith.Products p
        ON o.id = p.orderId
        GROUP BY o.id`);
    return result;
  };
}