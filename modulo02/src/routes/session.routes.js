import { Router } from 'express';
import { body } from 'express-validator';
import SessionController from '../app/controllers/SessionController';
import validationBodyMiddleware from '../middlewares/validationBodyMiddleware';

const sessionRouter = Router();

const validateLogin = validationBodyMiddleware([
  body('email')
    .notEmpty()
    .withMessage('email field is required')
    .isEmail()
    .withMessage('enter with a valid e-mail '),
  body('password')
    .notEmpty()
    .withMessage('password is required'),
]);

sessionRouter.post('/', validateLogin, SessionController.store);


export default sessionRouter;
