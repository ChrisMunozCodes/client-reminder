import { Pool } from 'pg';

import { env } from 'src/env.js';

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } finally {
    client.release();
  }
}

export async function testConnection() {
  try {
    await pool.connect(); // Attempt to connect
    console.log('Successfully connected to the PostgreSQL database.');
  } catch (error) {
    console.error('Failed to connect to the PostgreSQL database:', error);
  }
}