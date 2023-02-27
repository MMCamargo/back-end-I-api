import { UserEntity } from '.';
import {
	Entity,
	PrimaryColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
	JoinColumn,
	BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'task' })
class TaskEntity {
	@PrimaryColumn()
	uid!: string;

	@Column({ name: 'user_uid' })
	userUid!: string;

	@Column({ name: 'is_archived' })
	isArchived!: boolean;

	@Column()
	title!: string;

	@Column()
	content!: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt?: Date;

	@ManyToOne(() => UserEntity, (fk) => fk.tasks)
	@JoinColumn({ name: 'user_uid', referencedColumnName: 'uid' })
	user!: UserEntity;

	@BeforeInsert()
	beforeInsert() {
		this.uid = uuidv4();
	}
}

export default TaskEntity;
