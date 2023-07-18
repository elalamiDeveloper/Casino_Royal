import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { urlsError } from './middlewares/index.js';
import { globalErrorHandler } from './controllers/errorsControllers.js';

const app = express();

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json({ limit: '10kb' }));
app.use(cors());

app.route('/').get((req, res, next) => {
  res.json({ status: 'success' });
});
app.all('*', urlsError);

// ERRORS Handling
app.use(globalErrorHandler);

export default app;
