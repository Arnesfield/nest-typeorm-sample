import { Column } from 'typeorm';

export class Breedable {
  @Column()
  breed: string;
}
