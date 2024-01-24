import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';

export const GlobalModules = [PrismaModule, ConfigModule.forRoot()];
