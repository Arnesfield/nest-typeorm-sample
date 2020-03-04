import { Entity, Column, OneToMany } from 'typeorm';
import { Identifiable } from './base';
import { Dateable, Nameable } from './embedded';
import { Animal } from './animal.entity';

@Entity('users')
export class User extends Identifiable {
  @Column()
  username: string;

  @Column(() => Nameable, { prefix: false })
  name: Nameable;

  // exclude this
  @Column()
  password: string;

  // relations

  @OneToMany(
    () => Animal,
    animal => animal.owner
  )
  pets: Animal[];

  @Column(() => Dateable, { prefix: false })
  date: Dateable;
}
