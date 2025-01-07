import * as dotenv from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('SERVER_PORT');

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Todo API Project ')
    .setDescription('Todo')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      tagSorter: 'alpha',
      operationSorter: 'alpha',
    },
  });

  await app.listen(PORT);
}
bootstrap();
