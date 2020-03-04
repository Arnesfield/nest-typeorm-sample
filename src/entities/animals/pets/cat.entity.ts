import { ChildEntity, Column } from 'typeorm';
import { Pet } from '../pet.entity';
import { Breedable } from '../../embedded';

@ChildEntity()
export class Cat extends Pet {
  @Column(() => Breedable, { prefix: false })
  breed: Breedable;
}
