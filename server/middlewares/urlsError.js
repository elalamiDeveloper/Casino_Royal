import { AppError } from '../utils/index.js';

const urlsError = (req, res, next) =>
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));

export default urlsError;
