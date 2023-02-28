import { checkMissingTaskData } from './utils/middlewares';
import { tasksController } from '../../controllers';
import { Router } from 'express';

const tasksRouter = Router();

tasksRouter.post('/task', [checkMissingTaskData], tasksController.post);

tasksRouter.get('/tasks', tasksController.getAll);

tasksRouter.get('/task/:uid', tasksController.getOne);

tasksRouter.get('/tasks/:userUid', tasksController.getUserTasks);

tasksRouter.get('/tasks/search/:userUid', tasksController.getUserTasks);

export default tasksRouter;
