import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

import { TypedRequest } from '../@types/request/TypedRequest';
import { ProductData } from '../@types/services/ProductService';
import Product from '../models/Entities/Product';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  getAll = async (_req: Request, res: Response): Promise<void> => {
    const products: Product[] = await this.productService.getAll();
    res.status(200).json(products);
  };

  create = async (req: TypedRequest<ProductData>, res: Response): Promise<void> => {
    const { name, amount } = req.body;
    const product: Product = await this.productService.create({ name, amount });
    res.status(201).json(product);
  };
}