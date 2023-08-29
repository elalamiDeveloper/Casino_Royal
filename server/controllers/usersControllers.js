import { User } from '../models/index.js';

import { filterObject } from '../utils/index.js';

const createUser = async (req, res, next) => {
  try {
    const userBody = filterObject(
      req.body,
      'username',
      'password',
      'email',
      'birthYear'
    );

    const user = await User.create(userBody);

    res.status(201).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const filtredUsers = users.map((user) =>
      filterObject(user, 'id', 'username', 'email')
    );

    res.status(200).json({
      status: 'success',
      data: { users: filtredUsers },
    });
  } catch (err) {
    next(err);
  }
};

const getUserByToken = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'success',
      data: {
        user: req.user,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { createUser, getAllUsers, getUserByToken };
