import { NextFunction, Response } from 'express';
import { IRedisCacheService } from '../../../services/IRedisCacheService';
import { DecodedExpressRequest } from '../../../../users/infra/http/models/decodedRequest';

export class CacheMiddleware {
  private redisCacheService: IRedisCacheService;

  public constructor(redisCacheService: IRedisCacheService) {
    this.redisCacheService = redisCacheService;
  }

  public async handle(req: any, res: Response, next: NextFunction) {
    next();
    req.log.debug('Attempting to save request body to cache.');
    try {
      this.redisCacheService.saveRequestBody(req.decoded.userId, req.body, req.body);
      req.log.debug('Successfully saved request body to cache.');
    } catch (err) {
      req.log.error({ err }, 'CacheMiddleware failed with unknown error');
    }
  }
}
