import { Redis } from 'ioredis';

export abstract class AbstractRedisClient {
  public constructor(client: Redis) {
    this.client = client;
  }

  protected client: Redis;

  public async set(key: string, value: string): Promise<any> {
    return await this.client.call('JSON.SET', key, '$', value, 'EX', 1 * 60 * 60 * 24 * 30);
  }
}
