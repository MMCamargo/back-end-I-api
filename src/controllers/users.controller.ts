import { UsersRepository } from '../repositories';
import { IDefaultResponse } from '../common/models';
import { Request, Response } from 'express';

class UsersController {
	async post(req: Request, res: Response) {
		const { firstName, lastName, email, password } = req.body;

		const usersRepository = new UsersRepository();

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

export default UsersController;
