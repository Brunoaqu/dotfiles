import { AbstractRedisClient } from './AbstractRedisClient';

export class RedisCacheService extends AbstractRedisClient {
  private constructKey(userId: string, xRequestId: string): string {
    return `${userId}`;
  }

  public async saveRequestBody(userId: string, xRequestId: string, body: string): Promise<any> {
    return await this.hset(this.constructKey(userId, xRequestId), JSON.stringify(body));
  }
}
