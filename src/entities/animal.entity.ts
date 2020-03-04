import {
  Entity,
  Column,
  JoinColumn,
  ManyToOne,
  TableInheritance
} from 'typeorm';
import { Identifiable } from './base';
import { Dateable } from './embedded';
import { User } from './user.entity';

@Entity('animals')
@TableInheritance({ column: { name: 'type', type: 'varchar' } })
export class Animal extends Identifiable {
  @Column()
  name: string;

  @ManyToOne(
    () => User,
    user => user.pets
  )
  @JoinColumn({ name: 'owner_id' })
  owner: User;

  @Column(() => Dateable, { prefix: false })
  date: Dateable;
}
