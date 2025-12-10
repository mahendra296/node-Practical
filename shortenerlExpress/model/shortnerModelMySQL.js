import { readFile, writeFile } from "fs/promises";
import path from "path";
import { db } from "../config/db-client.js";

const DATA_FILE = path.join("data", "loadlinks.json");
console.log(DATA_FILE);

export const loadLinks = async () => {
  try {
    const [rows] = await db.execute(`select * from short_links`);
    return rows;
  } catch (err) {
    throw err;
  }
};

export const saveLinks = async ({ url, finalShortCode }) => {
  const [result] = await db.execute(
    `INSERT INTO short_links(short_code, url) VALUES(?, ?)`,
    [finalShortCode, url]
  );
  return result;
};

export const getLinkByShortCode = async (shortCode) => {
  const [rows] = await db.execute(
    `select * from short_links sl where sl.short_code = ?`,
    [shortCode]
  );
  if (rows.length > 0) {
    return rows[0];
  } else return null;
};

export const deleteLink = async (shortCode) => {
  const [result] = await db.execute(
    `delete from short_links where short_code = ?`,
    [shortCode]
  );
  return result;
};
