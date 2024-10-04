import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  const config = app.get<ConfigService>(ConfigService);

  const port = config.get<number>('api.port');
  const apiUrl = config.get<string>('api.apiUrl');
  const nodeEnv = config.get<string>('api.nodeEnv');

  app.enableCors();

  await app.listen(port, () => {
    logger.log(`Server listening at ${apiUrl}:${port}`);
    logger.log(`Running in mode: ${nodeEnv}`);
  });
}

bootstrap();
