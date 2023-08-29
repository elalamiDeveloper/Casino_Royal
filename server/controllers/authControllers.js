import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { User } from '../models/index.js';
import { filterObject, AppError } from '../utils/index.js';

const signToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24 * 60,
  });

  return token;
};

const protect = async (req, res, next) => {
  try {
    // Getting token and check of it's there
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer ')
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      throw new AppError('Vous etes pas connecter', 401);
    }

    // Verify that token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) throw new AppError("Cet utilisateur n'existe plus", 401);

    // All is OK
    req.user = currentUser;
    next();
  } catch (err) {
    next(err);
  }
};

const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError("Vous n'êtes pas autorisé à accéder", 403));
    }

    next();
  };
};

const signup = async (req, res, next) => {
  try {
    const userBody = filterObject(
      req.body,
      'username',
      'password',
      'email',
      'birthYear'
    );

    const user = await User.create(userBody);
    const token = signToken(user.id);
    const filtredUser = filterObject(user, 'id', 'username', 'email');

    res.status(201).json({
      status: 'success',
      data: {
        token,
        user: filtredUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      throw new AppError('Please provide username and password.', 400);
    }

    const user = await User.findOne({ username });
    const correct = user
      ? await user.correctPassword(password, user.password)
      : false;

    if (!user || !correct) {
      throw new AppError('Incorrect username or password.', 401);
    }

    const token = signToken(user.id);
    const filtredUser = filterObject(user, 'id', 'username', 'email');

    res.status(200).json({
      status: 'success',
      data: {
        token,
        user: filtredUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

export { signup, login, protect, restrictTo };
