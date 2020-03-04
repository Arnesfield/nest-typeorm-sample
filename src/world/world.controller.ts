import { Controller, Get, Inject } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { WorldService } from './world.service';
import { Pet } from '../entities/animals/pet.entity';

@Controller('world')
export class WorldController {
  @Inject() private worldService: WorldService;

  @Get()
  async main() {
    const user: User = await this.worldService.createUser({
      username: 'johndoe',
      password: 'plaintext',
      name: { first: 'John', last: 'Doe' }
    });

    const pet: Pet = await this.worldService.createDog({
      name: 'Bruno',
      owner: user
    });

    return { user, pet };
  }
}
