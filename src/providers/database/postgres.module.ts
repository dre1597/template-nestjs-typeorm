import { Module } from '@nestjs/common';
import { TypeormService } from './typeorm.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { CustomConfigModule } from '../../config/custom-config.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [CustomConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isTestingEnvironment =
          configService.get('api.nodeEnv') === 'test';

        return {
          type: 'postgres',
          host: configService.get('database.host'),
          port: configService.get('database.port'),
          username: configService.get('database.user'),
          password: configService.get('database.password'),
          database: configService.get('database.name'),
          dropSchema: isTestingEnvironment,
          migrationsTableName: 'migration',
          entities: isTestingEnvironment
            ? ['src/**/*.entity{.ts,.js}']
            : ['dist/**/*.entity{.ts,.js}'],
          migrations: isTestingEnvironment
            ? ['src/migrations/*.ts']
            : ['dist/migrations/*.js'],
          migrationsTransactionMode: 'each',
          uuidExtension: 'uuid-ossp',
          installExtensions: true,
          namingStrategy: new SnakeNamingStrategy(),
        } satisfies TypeOrmModuleOptions;
      },
    }),
  ],
  providers: [TypeormService],
})
export class PostgresModule {}
