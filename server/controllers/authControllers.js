import jwt from 'jsonwebtoken';

import { User } from '../models/index.js';
import { filterObject, AppError } from '../utils/index.js';

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 60,
  });

  return token;
};

const signup = async (req, res, next) => {
  try {
    const userBody = filterObject(
      req.body,
      'firstName',
      'password',
      'email',
      'birthday'
    );

    const user = await User.create(userBody);
    const token = signToken(user.id);
    const filtredUser = filterObject(user, 'id', 'firstName', 'email');

    res.status(201).json({
      status: 'success',
      token,
      data: { user: filtredUser },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError('Please provide email and password.', 400);
    }

    const user = await User.findOne({ email });
    const correct = user
      ? await user.correctPassword(password, user.password)
      : false;

    if (!user || !correct) {
      throw new AppError('Incorrect email or password.', 401);
    }

    const token = signToken(user.id);
    const filtredUser = filterObject(user, 'id', 'firstName', 'email');

    res.status(200).json({
      status: 'success',
      token,
      data: { user: filtredUser },
    });
  } catch (err) {
    next(err);
  }
};

export { signup, login };
