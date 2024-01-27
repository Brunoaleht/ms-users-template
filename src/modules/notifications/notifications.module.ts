import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsRepository } from './repositories/notifications.repository';
import { NotificationsService } from './notifications.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [NotificationsRepository, NotificationsService],
})
export class NotificationsModule {}
