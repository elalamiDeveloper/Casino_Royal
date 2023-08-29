import express from 'express';

import {
  createUser,
  getAllUsers,
  getUserByToken,
} from '../controllers/usersControllers.js';
import { signup, login, protect } from '../controllers/authControllers.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/connect').get(protect, getUserByToken);
router.route('/').post(createUser).get(getAllUsers);

export { router as usersRouter };
