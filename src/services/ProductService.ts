import { ProductData } from '../@types/services/ProductService';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';
import Product from '../models/Entities/Product';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) {}

  create = async (productData: ProductData): Promise<Product> => {
    const product: Product = await this.productModel.create(productData);
    return product;
  };
  
  getAll = async (): Promise<Product[]> => {
    const product: Product[] = await this.productModel.getAll();
    return product;
  };
}