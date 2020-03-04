import { Module, DynamicModule } from '@nestjs/common';
import * as dotenvFlow from 'dotenv-flow';

@Module({})
export class ConfigModule {
  private static configured = false;

  static forRoot(): DynamicModule {
    if (!this.configured) {
      dotenvFlow.config();
      this.configured = true;
    }
    return { module: ConfigModule };
  }
}
