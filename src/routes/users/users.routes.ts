import { UsersController } from '../../controllers';
import { checkMissingData, checkUniqueEmail } from './utils/middlewares';
import { Router } from 'express';

const usersRouter = Router();

const usersController = new UsersController();

usersRouter.post(
	'/user',
	[checkMissingData, checkUniqueEmail],
	usersController.post
);

export default usersRouter;
