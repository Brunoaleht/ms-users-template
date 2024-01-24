import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { PubSubModule } from './pubsub/pubsub.module';

export const GlobalModules = [
  PrismaModule,
  ConfigModule.forRoot(),
  PubSubModule,
];
