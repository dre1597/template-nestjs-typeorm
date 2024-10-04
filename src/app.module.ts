import { Module } from '@nestjs/common';
import { PostgresModule } from './providers/database/postgres.module';
import { UserModule } from './apps/users/user.module';
import { CustomConfigModule } from './config/custom-config.module';
import { HealthModule } from './apps/health/health.module';

@Module({
  imports: [CustomConfigModule, HealthModule, PostgresModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
