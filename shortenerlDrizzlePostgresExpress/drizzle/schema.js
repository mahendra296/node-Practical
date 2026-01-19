import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const shortLinkTable = pgTable("short_links", {
  id: serial("id").primaryKey(),
  url: varchar("name", { length: 255 }).notNull(),
  shortCode: varchar("short_code", { length: 255 }).notNull().unique(),
});
