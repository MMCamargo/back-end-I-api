import { checkMissingData, checkUniqueEmail } from './utils/middlewares';
import { usersController } from '../../controllers';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.post(
	'/user',
	[checkMissingData, checkUniqueEmail],
	usersController.post
);

usersRouter.get('/users', usersController.getAll);

usersRouter.get('/user/:uid', usersController.getOne);

export default usersRouter;
