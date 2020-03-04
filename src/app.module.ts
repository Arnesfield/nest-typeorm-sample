import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { WorldModule } from './world/world.module';

@Module({
  imports: [DatabaseModule, WorldModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
