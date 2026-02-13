import Redis from 'ioredis';

const REDIS_HOST = process.env.REDIS_HOST || '100.64.0.4';
const REDIS_PORT = parseInt(process.env.REDIS_PORT || '6379', 10);
const REDIS_PASSWORD = process.env.REDIS_PASSWORD || undefined;

// Singleton Redis instance
let redis: Redis | null = null;

export function getRedis(): Redis {
  if (!redis) {
    redis = new Redis({
      host: REDIS_HOST,
      port: REDIS_PORT,
      password: REDIS_PASSWORD,
      maxRetriesPerRequest: 3,
      lazyConnect: true,
      retryStrategy: (times: number) => Math.min(times * 100, 3000),
    });

    redis.on('error', (err) => {
      console.error('Redis connection error:', err);
    });

    redis.on('connect', () => {
      console.log('Redis connected');
    });
  }
  return redis;
}

// Cache helper with TTL
export async function getOrSet<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttlSeconds: number = 3600
): Promise<T> {
  const client = getRedis();
  
  try {
    const cached = await client.get(key);
    if (cached) {
      return JSON.parse(cached) as T;
    }
  } catch (err) {
    console.error('Redis get error:', err);
  }

  const data = await fetcher();

  try {
    await client.setex(key, ttlSeconds, JSON.stringify(data));
  } catch (err) {
    console.error('Redis set error:', err);
  }

  return data;
}

export async function invalidate(pattern: string): Promise<void> {
  const client = getRedis();
  const keys = await client.keys(pattern);
  if (keys.length > 0) {
    await client.del(...keys);
  }
}

export async function closeRedis(): Promise<void> {
  if (redis) {
    await redis.quit();
    redis = null;
  }
}
