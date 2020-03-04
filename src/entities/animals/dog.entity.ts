import { ChildEntity, Column } from 'typeorm';
import { Animal } from '../animal.entity';
import { Breedable } from '../embedded';

@ChildEntity()
export class Dog extends Animal {
  @Column(() => Breedable, { prefix: false })
  breed: Breedable;

  @Column()
  barkVolume: number;
}
