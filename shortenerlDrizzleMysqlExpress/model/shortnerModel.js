import { readFile, writeFile } from "fs/promises";
import path from "path";

const DATA_FILE = path.join("data", "loadlinks.json");
console.log(DATA_FILE);

export const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw err;
  }
};

export const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links), "utf-8");
};

export const deleteLink = async (shortCode) => {
  const links = await loadLinks();
  if (links[shortCode]) {
    delete links[shortCode];
    await saveLinks(links);
    return true;
  }
  return false;
};
