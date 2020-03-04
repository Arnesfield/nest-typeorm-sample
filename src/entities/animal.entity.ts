import { Entity, Column, TableInheritance } from 'typeorm';
import { Identifiable } from './base';
import { Dateable } from './embedded';

@Entity('animals')
@TableInheritance({ column: { name: 'type', type: 'varchar' } })
export class Animal extends Identifiable {
  @Column()
  name: string;

  @Column(() => Dateable, { prefix: false })
  date: Dateable;
}
