import { Entity, Column } from 'typeorm';
import { Identifiable } from './base';
import { Dateable, Nameable } from './embedded';

@Entity('users')
export class User extends Identifiable {
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
