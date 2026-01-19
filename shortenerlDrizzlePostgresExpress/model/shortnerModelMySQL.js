import "dotenv/config";
import { db } from "../config/db.js";
import { shortLinkTable } from "../drizzle/schema.js";
import { eq } from "drizzle-orm";

export const loadLinks = async () => {
  try {
    const allShortLinks = await db.select().from(shortLinkTable);
    return allShortLinks;
  } catch (err) {
    throw err;
  }
};

export const saveLinks = async ({ url, finalShortCode }) => {
  const result = db
    .insert(shortLinkTable)
    .values({ shortCode: finalShortCode, url: url });

  return result;
};

export const getLinkByShortCode = async (shortCode) => {
  const [shortLink] = await db
    .select()
    .from(shortLinkTable)
    .where(eq(shortLinkTable.shortCode, shortCode));

  return shortLink;
};

export const deleteLink = async (shortCode) => {
  const result = await db
    .delete(shortLinkTable)
    .where(eq(shortLinkTable.shortCode, shortCode));
  return result;
};
