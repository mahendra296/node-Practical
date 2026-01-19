import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

export const client = postgres(process.env.DATABASE_URL);

// Create the Drizzle database instance
export const db = drizzle(client);
