import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PubSubService {
  constructor(
    @Inject('REDIS_CLIENT') private redisClient: ClientProxy,
    private configService: ConfigService,
  ) {}

  async get<T>(channel: string, value: object, service: string): Promise<T> {
    //substituir o toPromise pela a função lastValueFrom
    return await this.redisClient
      .send({ cmd: this.getChannel(channel, service) }, value)
      .toPromise();
  }

  async set<T>(key: string, value: any): Promise<T> {
    const setValue = await this.redisClient
      .send('set', [key, value])
      .toPromise();
    return setValue;
  }

  publish(channel: string, value: object, service: string): void {
    this.redisClient.emit(this.getChannel(channel, service), value);
  }

  private getChannel(channel: string, service: string): string {
    return service ?? this.configService.get('API_TAG') + '-' + channel;
  }
}
