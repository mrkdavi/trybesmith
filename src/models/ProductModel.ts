import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { ProductData } from '../@types/services/ProductService';
import Product from './Entities/Product';

export default class ProductModel {
  constructor(private connection: Pool) { }

  getAll = async (): Promise<Product[]> => {
    const [result] = await this.connection
      .execute<(Product & RowDataPacket)[]>('SELECT * FROM Trybesmith.Products');
    return result;
  };

  create = async (productData: ProductData): Promise<Product> => {
    const { name, amount } = productData;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { ...productData, id: insertId };
  };
}