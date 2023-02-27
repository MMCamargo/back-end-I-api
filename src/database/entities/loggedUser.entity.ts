import { UserEntity } from '.';
import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
	JoinColumn,
} from 'typeorm';

@Entity({ name: 'logged_user' })
class LoggedUserEntity {
	@PrimaryColumn()
	uid!: string;

	@Column({ name: 'user_uid' })
	userUid!: string;

	@Column({ name: 'first_name' })
	firstName!: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt?: Date;

	@OneToOne(() => UserEntity, (fk) => fk.uid)
	@JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' })
	user!: UserEntity;
}

export default LoggedUserEntity;
