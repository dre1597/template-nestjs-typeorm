import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

export const generateDocumentation = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Template TypeORM')
    .setDescription('Template TypeORM API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme();
  const options = {
    explorer: true,
    customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK_MONOKAI),
  };

  SwaggerModule.setup('api', app, document, options);
};
