class UsersRepository {
	async postUser(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) {}
}

const usersRepository = new UsersRepository();

export default usersRepository;
