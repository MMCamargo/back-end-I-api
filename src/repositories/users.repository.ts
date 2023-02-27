import { UserEntity } from '../database/entities';
import pgHelper from '../database/pgHelper';

class UsersRepository {
	async postUser(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	): Promise<UserEntity> {
		const manager = pgHelper.client.manager;

		const newUser = manager.create(UserEntity, {
			firstName,
			lastName,
			email,
			password,
		});

		return await manager.save(newUser);
	}

	async verifyUniqueEmail(email: string): Promise<boolean> {
		const manager = pgHelper.client.manager;

		const someEqualEmail = await manager.findOne(UserEntity, {
			where: { email },
		});

		return !!someEqualEmail;
	}
}

const usersRepository = new UsersRepository();

export default usersRepository;
