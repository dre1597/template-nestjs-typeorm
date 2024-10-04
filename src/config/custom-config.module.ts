import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { apiConfig, databaseConfig } from './custom-config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [apiConfig, databaseConfig],
      isGlobal: true,
      envFilePath: '.env',
      validationSchema: Joi.object({
        API_URL: Joi.string().optional(),
        PORT: Joi.number().optional(),
        NODE_ENV: Joi.valid('development', 'production', 'test').optional(),
        DATABASE_HOST: Joi.string().optional(),
        DATABASE_PORT: Joi.number().optional(),
        DATABASE_USER: Joi.string().optional(),
        DATABASE_PASSWORD: Joi.string().optional(),
        DATABASE_NAME: Joi.string().optional(),
        DATABASE_SYNCHRONIZE: Joi.boolean().optional(),
        DATABASE_MIGRATIONS_RUN: Joi.boolean().optional(),
        DATABASE_HOST_TEST: Joi.string().optional(),
        DATABASE_PORT_TEST: Joi.number().optional(),
        DATABASE_USER_TEST: Joi.string().optional(),
        DATABASE_PASSWORD_TEST: Joi.string().optional(),
        DATABASE_NAME_TEST: Joi.string().optional(),
        DATABASE_SYNCHRONIZE_TEST: Joi.boolean().optional(),
        DATABASE_MIGRATIONS_RUN_TEST: Joi.boolean().optional(),
      }),
    }),
  ],
})
export class CustomConfigModule {}
