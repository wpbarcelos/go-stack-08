import { Router } from 'express';
import userRouter from './users.routes';
import sessionRouter from './session.routes';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));

routes.use('/users', userRouter);
routes.use('/session', sessionRouter);

export default routes;
