import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const generateDocumentation = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Template TypeORM')
    .setDescription('Template TypeORM API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
};
