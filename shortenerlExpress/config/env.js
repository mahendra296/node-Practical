import z from "zod";

export const env = z
  .object({
    PORT: z.coerce.number().default(3000),
    DATABASE_PORT: z.coerce.number().default(3306),
    DATABASE_HOST: z.string(),
    DATABASE_USER: z.string(),
    DATABASE_PASSWORD: z.string(),
    DATABASE_NAME: z.string(),
  })
  .parse(process.env);
