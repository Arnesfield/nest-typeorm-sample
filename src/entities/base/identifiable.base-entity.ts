import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class Identifiable {
  @PrimaryGeneratedColumn()
  id: number;
}
