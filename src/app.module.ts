import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresModule } from './providers/database/postgres.module';
import { UserModule } from './apps/users/user.module';
import { CustomConfigModule } from './config/custom-config.module';

@Module({
  imports: [CustomConfigModule, PostgresModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
