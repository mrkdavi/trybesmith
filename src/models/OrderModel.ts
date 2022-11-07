import { Pool, ResultSetHeader } from 'mysql2/promise';
import { OrderData } from '../@types/services/OrderService';
import Order from './Entities/Order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [rows] = result;
    return rows as Order[];
  }

  public async create(orderData: OrderData): Promise<Order> {
    const { userId } = orderData;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { ...orderData, id: insertId } as Order;
  }
}