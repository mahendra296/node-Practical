import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "./generated/prisma/client.js";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});

const prisma = new PrismaClient({ adapter });

const main = async () => {
  // create single user
  /*
    const user = await prisma.user.create({
      data: {
        name: "Mahi",
        email: "abc@gmail.com",
        password: "test",
      },
    });
    */
  // create multiple users
  /*
  const users = await prisma.user.createMany({
    data: [
      {
        name: "One",
        email: "a@gmail.com",
        password: "test",
      },
      {
        name: "two",
        email: "b@gmail.com",
        password: "test",
      },
    ],
  });
  console.log(users);
  */
  // Find multiple user
  //   const users = await prisma.user.findMany();
  //   console.log(users);

  // Update user
  /*
  const updatedUser = await prisma.user.update({
    where: { id: 1 },
    data: { name: "Hello" },
  });
  console.log(updatedUser);
  */
  const deletedUser = await prisma.user.delete({
    where: { id: 3 },
  });
  console.log(deletedUser);
};

main()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
