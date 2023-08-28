import express from 'express';

import { createUser } from '../controllers/usersControllers.js';

const router = express.Router();

router.route('/').post(createUser);

export { router as usersRouter };
