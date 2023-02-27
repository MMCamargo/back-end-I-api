import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: false,
	// entities: [UserEntity, TaskEntity, LoggedUserEntity],
	// migrations: [
	// 	CreateTableUsers1676596723936,
	// 	CreateTableTasks1676674184491,
	// 	CreateTableLoggedUsers1676676748753,
	// ],
};

export default config;
