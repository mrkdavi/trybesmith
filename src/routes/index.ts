import { Express } from 'express';
import productRouter from './productRouter';

const createRouter = (app: Express) => {
  app.use('/products', productRouter);
};

export default createRouter;