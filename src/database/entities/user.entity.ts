import { TaskEntity } from '.';
import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToMany,
	JoinColumn,
	BeforeInsert,
	BeforeUpdate,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'users' })
class UserEntity {
	@PrimaryColumn()
	uid!: string;

	@Column({ name: 'first_name' })
	firstName!: string;

	@Column({ name: 'last_name' })
	lastName!: string;

	@Column()
	email!: string;

	@Column()
	password!: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt?: Date;

	@OneToMany(() => TaskEntity, (fk) => fk.user)
	@JoinColumn({ name: 'uid', referencedColumnName: 'user_uid' })
	tasks?: TaskEntity[];

	@BeforeInsert()
	beforeInsert() {
		this.uid = uuidv4();
		this.createdAt = new Date();
	}

	@BeforeUpdate()
	beforeUpdate() {
		this.updatedAt = new Date();
	}
}

export default UserEntity;
