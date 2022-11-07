import { Express } from 'express';
import productRouter from './productRouter';
import userRouter from './userRouter';

const createRouter = (app: Express) => {
  app.use('/products', productRouter);
  app.use('/users', userRouter);
};

export default createRouter;