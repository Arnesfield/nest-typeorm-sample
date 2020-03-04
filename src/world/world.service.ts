import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository, DeepPartial } from 'typeorm';
import { Dog } from '../entities/animals/pets/dog.entity';

@Injectable()
export class WorldService {
  // TODO: make separate modules for user and pets
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Dog) private dogRepository: Repository<Dog>
  ) {}

  public async createUser(userProps: DeepPartial<User>): Promise<User> {
    const user = this.userRepository.create(userProps);
    return await this.userRepository.save(user);
  }

  public async createDog(dogProps: DeepPartial<Dog>): Promise<Dog> {
    const dog = this.dogRepository.create(dogProps);
    return await this.dogRepository.save(dog);
  }
}
