import { User } from '../models/index.js';

import { filterObject } from '../utils/index.js';

const createUser = async (req, res, next) => {
  try {
    const userBody = filterObject(
      req.body,
      'firstName',
      'password',
      'email',
      'birthday'
    );

    const user = await User.create(userBody);

    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    next(err);
  }
};

export { createUser };
