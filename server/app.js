import express from 'express';
import morgan from 'morgan';

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/', (req, res, next) => {
  res.json({ status: 'success' });
});

export default app;
