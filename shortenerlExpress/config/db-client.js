import mysql from "mysql2/promise";
import { env } from "./env.js";

// 1. connect to db
export const db = await mysql.createConnection({
  host: env.DATABASE_HOST,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
});
