import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ConsoleLogger, Logger } from '@nestjs/common';

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'Shortener API',
    }),
  });

  app.enableCors();

  Logger.log(`Shortener API is starting on port ${process.env.PORT ?? 3000}`);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
