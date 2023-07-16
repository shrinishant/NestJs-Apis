import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Contacts, UpdateEmployeeDto } from './employee/dto';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Employee - NestJs API')
    .setDescription('Api endpoints for the Employee route')
    .setVersion('1.0')
    .addTag('Employee')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true
  }))
  await app.listen(3333);
}
bootstrap();
