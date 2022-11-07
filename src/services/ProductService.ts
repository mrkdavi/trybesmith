import { ProductData } from '../@types/services/ProductService';
import ProductModel from '../models/ProductModel';
import connection from '../config/database/connection';

export default class ProductService {
  constructor(private productModel = new ProductModel(connection)) {}

  create = async (productData: ProductData) => {
    const product = await this.productModel.create(productData);
    return product;
  };
  
  getAll = async () => {
    const product = await this.productModel.getAll();
    return product;
  };
}