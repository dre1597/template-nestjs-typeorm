import { registerAs } from '@nestjs/config';

import 'dotenv/config';

export const apiConfig = registerAs('api', () => ({
  apiUrl: process.env.API_URL || 'http://localhost',
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
}));

const databaseForTests = {
  host: process.env.DATABASE_HOST_TEST || 'localhost',
  port: Number(process.env.DATABASE_PORT_TEST) || 15432,
  user: process.env.DATABASE_USER_TEST || 'postgres',
  password: process.env.DATABASE_PASSWORD_TEST || 'postgres',
  name: process.env.DATABASE_NAME_TEST || 'template_test',
  synchronize: process.env.DATABASE_SYNCHRONIZE_TEST === 'true',
  migrationsRun: process.env.DATABASE_MIGRATIONS_RUN_TEST === 'true',
};

const database = {
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  name: process.env.DATABASE_NAME || 'template',
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  migrationsRun: process.env.DATABASE_MIGRATIONS_RUN === 'true',
};

export const databaseConfig = registerAs('database', () =>
  apiConfig().nodeEnv === 'test' ? databaseForTests : database,
);
