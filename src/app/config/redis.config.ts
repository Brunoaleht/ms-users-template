import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

export const addRedisClient = async (config: ConfigService) => {
  const logger = new Logger('RedisClient');
  const redisHost = config.get<string>('REDIS_HOST');
  const redisUser = config.get<string>('REDIS_USER');
  const redisPort = config.get<number>('REDIS_PORT');
  const redisPassword = config.get<string>('REDIS_PASSWORD');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: redisHost,
        port: redisPort,
        username: redisUser,
        password: redisPassword,
      },
    },
  );

  await app.listen().then(() => {
    logger.debug(`Redis Client is listening on ${redisHost}:${redisPort}`);
  });
};
