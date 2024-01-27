import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from './repositories/notifications.repository';

@Injectable()
export class NotificationsService {
  constructor(
    private readonly notificationsRepository: NotificationsRepository,
  ) {}

  async getNotificationsByUserId(userId: number) {
    return await this.notificationsRepository.getNotificationsByUserId(userId);
  }
}
