import dotenv from 'dotenv';
import { env } from 'process';
import { Pool } from 'pg';

dotenv.config();

const PORT = env.PORT;

const pool = new Pool({
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE
})

export { PORT, pool };
