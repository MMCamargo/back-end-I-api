import { UserEntity } from '.';
import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
	JoinColumn,
	BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'logged_users' })
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

	@BeforeInsert()
	beforeInsert() {
		this.uid = uuidv4();
		this.createdAt = new Date();
	}
}

export default LoggedUserEntity;
