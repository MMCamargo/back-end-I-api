import {
	BeforeInsert,
	BeforeUpdate,
	CreateDateColumn,
	PrimaryColumn,
	UpdateDateColumn,
} from 'typeorm';
import { v4 } from 'uuid';

abstract class BaseEntity {
	@PrimaryColumn()
	uid!: string;

	@CreateDateColumn({ name: 'created_at' })
	createdAt!: Date;

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt!: Date | null;

	@BeforeInsert()
	beforeInsert() {
		this.uid = v4();
		this.createdAt = new Date();
		this.updatedAt = null;
	}

	@BeforeUpdate()
	beforeUpdate() {
		this.updatedAt = new Date();
	}
}

export default BaseEntity;
