import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const PORT = config.get('port') || 4000;
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(PORT);
  Logger.log(`listening on PORT ${process.env.PORT}`);
}
bootstrap();
