import { usersRepository } from '../repositories';
import { IDefaultResponse } from '../common/models';
import { Request, Response } from 'express';

class UsersController {
	async post(req: Request, res: Response) {
		const { firstName, lastName, email, password } = req.body;

		usersRepository.postUser(firstName, lastName, email, password);

		return res.status(201).json({
			success: true,
			message: 'User created.',
		} as IDefaultResponse);
	}
}

const usersController = new UsersController();

export default usersController;
