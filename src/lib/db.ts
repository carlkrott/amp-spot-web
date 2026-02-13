import { Pool, PoolConfig } from 'pg';

const config: PoolConfig = {
  host: process.env.POSTGRES_HOST || '100.64.0.4',
  port: parseInt(process.env.POSTGRES_PORT || '24271', 10),
  user: process.env.POSTGRES_USER || 'amp_spot',
  password: process.env.POSTGRES_PASSWORD || '',
  database: process.env.POSTGRES_DATABASE || 'amp_spot',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

// Singleton pool instance
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    pool = new Pool(config);
    
    pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
    });
  }
  return pool;
}

export async function query<T>(text: string, params?: unknown[]): Promise<T[]> {
  const client = await getPool().connect();
  try {
    const result = await client.query(text, params);
    return result.rows as T[];
  } finally {
    client.release();
  }
}

export async function queryOne<T>(text: string, params?: unknown[]): Promise<T | null> {
  const rows = await query<T>(text, params);
  return rows[0] || null;
}

export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end();
    pool = null;
  }
}
