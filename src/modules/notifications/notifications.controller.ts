import { Controller } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @MessagePattern('notification')
  async getNotificationsByUserId(data: any) {
    console.warn('message', data?.message);
    return await this.notificationsService.getNotificationsByUserId(
      data?.userId,
    );
  }
}
