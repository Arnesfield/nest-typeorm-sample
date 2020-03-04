import { Controller, Get } from '@nestjs/common';

@Controller('world')
export class WorldController {
  @Get()
  main() {
    return 'Hello World';
  }
}
