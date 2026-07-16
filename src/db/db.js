import { drizzle } from 'drizzle-orm/node-postgres';
import pkg, {Pool} from 'pg';
import 'dotenv/config';
// import { Pool } from 'pg';

const { pool } = pkg;

const pool = new Pool({connectionString: process.env.DATABASE_URL});

export const db = drizzle(pool);


// if(!process.env.DATABASE_URL) {
//     throw new Error('DATABASE_URL is required');
// }
//
// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL!,
// });
//
// export const db = drizzle(pool);