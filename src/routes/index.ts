import { Express } from 'express';
import productRouter from './ProductRouter';

const createRouter = (app: Express) => {
  app.use('/products', productRouter);
};

export default createRouter;