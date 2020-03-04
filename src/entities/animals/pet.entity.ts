import { ChildEntity, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../user.entity';
import { Animal } from '../animal.entity';

@ChildEntity()
export abstract class Pet extends Animal {
  @ManyToOne(
    () => User,
    user => user.pets,
    { nullable: true }
  )
  @JoinColumn({ name: 'owner_id' })
  owner?: User;
}
