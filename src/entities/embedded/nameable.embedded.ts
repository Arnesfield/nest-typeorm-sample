import { Column } from 'typeorm';

export class Nameable {
  @Column({ name: 'first_name' })
  first: string;

  @Column({ name: 'middle_name', nullable: true })
  middle?: string;

  @Column({ name: 'last_name' })
  last: string;
}
