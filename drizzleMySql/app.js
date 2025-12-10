import { db } from "./config/db.js";
import { usersTable } from "./drizzle/schema.js";

const main = async () => {
  // create single user
  /* 
  const user = await db
    .insert(usersTable)
    .values({ name: "Mahi", email: "abc@gmail.com", age: 30 });
  console.log(user);
 */
  // create multiple users
  /* 
  const users = await db.insert(usersTable).values([
    {
      name: "One",
      email: "a@gmail.com",
      age: 30,
    },
    {
      name: "two",
      email: "b@gmail.com",
      age: 30,
    },
  ]);
  console.log(users);
 */
  // Find multiple user
  /* 
  const users = await db.select().from(usersTable);
  console.log(users);
 */
  // Get single user with where clause
  /* 
  const user = await db
    .select()
    .from(usersTable)
    .where({ email: "a@gmail.com" });
  console.log(user);
 */
  //Update user
  /* 
  const updatedUser = await db
    .update(usersTable)
    .set({ name: "one one" })
    .where({ email: "b@gmail.com" });
  console.log(updatedUser);
   */

  // deleter User
  const deleteUser = await db.delete(usersTable).where({
    id: 8,
  });
  console.log(deleteUser);
};

main().catch((error) => {
  console.error(error);
});
