import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot()]
})
export class DatabaseModule {}
