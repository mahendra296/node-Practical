import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.ts";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

export const loadLinks = async () => {
  try {
    const allShortLinks = await prisma.shortLinks.findMany();
    return allShortLinks;
  } catch (err) {
    throw err;
  }
};

export const saveLinks = async ({ url, finalShortCode }) => {
  const result = prisma.shortLinks.create({
    data: { short_code: finalShortCode, url: url },
  });

  return result;
};

export const getLinkByShortCode = async (shortCode) => {
  const shortLink = await prisma.shortLinks.findUnique({
    where: { short_code: shortCode },
  });

  return shortLink;
};

export const deleteLink = async (shortCode) => {
  const result = await prisma.shortLinks.delete({
    where: { short_code: shortCode },
  });

  return result;
};
