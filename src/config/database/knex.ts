import dotenv from 'dotenv';
dotenv.config();

export const conn = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
    user: process.env.DB_USERNAME || 'username',
    database: process.env.DB_NAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    ssl: false,
  },
};
