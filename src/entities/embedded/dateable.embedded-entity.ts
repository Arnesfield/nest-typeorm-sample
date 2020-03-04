import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

const TIMESTAMP = 'now()';

export class Dateable {
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => TIMESTAMP
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => TIMESTAMP,
    onUpdate: TIMESTAMP
  })
  updatedAt: Date;

  @Column({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    default: null
  })
  deletedAt: Date;
}
