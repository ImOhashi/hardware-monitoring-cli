import IoRedis from "ioredis";

export class Redis {
  private redis: IoRedis.Redis;

  constructor() {
    this.redis = new IoRedis({
      host: process.env.REDIS_HOST || "localhost",
      port: parseInt(process.env.REDIS_PORT) || 6379,
      keyPrefix: "sys:",
    });
  }

  public set(key: string, value: string, time: number): Promise<string> {
    return this.redis.set(key, value, "EX", time);
  }

  public async get(key: string): Promise<any> {
    const value = await this.redis.get(key);

    return value ? value : null;
  }
}
