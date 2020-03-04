import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Dateable } from './embedded/dateable.embedded-entity';
import { Nameable } from './embedded/nameable.embedded-entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column(() => Nameable, { prefix: false })
  name: Nameable;

  // exclude this
  @Column()
  password: string;

  @Column(() => Dateable, { prefix: false })
  date: Dateable;
}
