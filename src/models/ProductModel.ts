import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ProductData } from '../@types/services/ProductService';
import Product from './Entities/Product';

export default class ProductModel {
  constructor(private connection: Pool) { }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[];
  }

  public async create(productData: ProductData): Promise<Product> {
    const { name, amount } = productData;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { ...productData, id: insertId } as Product;
  }
}