import express from 'express';
import createRouter from './routes';

const app = express();

app.use(express.json());

createRouter(app);

export default app;
