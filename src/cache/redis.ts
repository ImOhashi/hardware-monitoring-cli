import IoRedis from "ioredis";

export class Redis {
  private redis: IoRedis.Redis;

  constructor() {
    this.redis = new IoRedis({
      host: process.env.REDIS_HOST || "localhost",
      port: parseInt(process.env.REDIS_PORT) || 6379,
      keyPrefix: "system:",
    });
  }

  set(key: string, value: string, timeExp: string): Promise<string> {
    return this.redis.set(key, value, timeExp);
  }
}
