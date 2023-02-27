import { usersRepository } from '../repositories';
import { IDefaultResponse } from '../common/models';
import { Request, Response } from 'express';

class UsersController {
	async post(req: Request, res: Response) {
		const { firstName, lastName, email, password } = req.body;

		const newUser = await usersRepository.postUser(
			firstName,
			lastName,
			email,
			password
		);

		return res.status(201).json({
			success: true,
			message: 'User created.',
			data: newUser,
		} as IDefaultResponse);
	}
}

const usersController = new UsersController();

export default usersController;
