import { Entity, Column, OneToMany } from 'typeorm';
import { Identifiable } from './base';
import { Dateable, Nameable } from './embedded';
import { Pet } from './animals/pet.entity';

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
    () => Pet,
    pet => pet.owner
  )
  pets: Pet[];

  @Column(() => Dateable, { prefix: false })
  date: Dateable;
}
