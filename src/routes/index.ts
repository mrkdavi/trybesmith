import { Express } from 'express';
import productRouter from './productRouter';
import userRouter from './userRouter';
import orderRouter from './orderRouter';

const createRouter = (app: Express) => {
  app.use('/products', productRouter);
  app.use('/users', userRouter);
  app.use('/orders', orderRouter);
};

export default createRouter;