import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getNotificationsByUserId(userId: number) {
    return await this.prismaService.notifications.findMany({
      where: {
        userId,
      },
    });
  }
}
