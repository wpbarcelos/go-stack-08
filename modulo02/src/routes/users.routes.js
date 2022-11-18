import { Router } from 'express';
import { body } from 'express-validator';
import User from '../app/models/User';
import validationBodyMiddleware from '../middlewares/validationBodyMiddleware';
import authMiddleware from '../middlewares/auth';

import userController from '../app/controllers/UserController';

const validateUser = validationBodyMiddleware([
  body('name').notEmpty(),
  body('email').notEmpty().isEmail(),
  body('password')
    .notEmpty()
    .withMessage('password is required')
    .isLength({ min: 8, max: 100 })
    .withMessage('password must be between 8 and 100 characters'),
  body('provider')
    .isBoolean()
    .withMessage('provider accept boolean values')
    .optional({ nullable: false }),
]);

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const users = await User.findAll();
  return res.json(users);
});

userRouter.post('/', validateUser, userController.store);

userRouter.put(
  '/',
  validationBodyMiddleware([
    body('email').notEmpty().isEmail(),
    body('password')
      .notEmpty()
      .withMessage('password is required')
      .isLength({ min: 8, max: 100 })
      .withMessage('password must be between 8 and 100 characters'),
  ]),
  authMiddleware,
  userController.update
);

export default userRouter;
