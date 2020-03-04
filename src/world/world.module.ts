import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { User } from '../entities/user.entity';
import { Dog } from '../entities/animals/pets/dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Dog])],
  controllers: [WorldController],
  providers: [WorldService]
})
export class WorldModule {}
