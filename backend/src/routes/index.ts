import { Router } from 'express';
// import classesRouter from './routes.classes';
import ClassController from '../controllers/ClassController';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import ensureAuhenticated from '../middlewares/ensureAuthenticate';
import connectionsRouter from './connections.routes';

const routes = Router();

const classController = new ClassController();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/connections', connectionsRouter);

routes.use(ensureAuhenticated);
routes.post('/classes', classController.execute);
routes.get('/classes', classController.index);

export default routes;
