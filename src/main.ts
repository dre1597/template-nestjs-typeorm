import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { generateDocumentation } from './helpers/generate-documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Main');
  const config = app.get<ConfigService>(ConfigService);

  const port = config.get<number>('api.port');
  const nodeEnv = config.get<string>('api.nodeEnv');

  app.enableCors();

  if (nodeEnv !== 'production') {
    generateDocumentation(app);
  }

  await app.listen(port, () => {
    logger.log(`Server listening at port ${port}`);
    logger.log(`Running in mode: ${nodeEnv}`);
  });
}

bootstrap();
