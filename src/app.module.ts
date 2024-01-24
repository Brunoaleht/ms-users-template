import { Module, ValidationPipe } from '@nestjs/common';
import { FeatureModules } from './modules';
import { GlobalModules } from './modules/global';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [...GlobalModules, ...FeatureModules],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
