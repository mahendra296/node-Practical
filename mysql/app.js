import mysql from "mysql2/promise";

// 1. connect to db
const db = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testdb",
});

// 2. we need to create a db
// console.log(await db.execute(`create database testdb`));
// console.log(await db.execute(`show databases`));

// 3. then we need to create a table
// console.log(
//   await db.execute(`CREATE TABLE users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(100),
//     email VARCHAR(100)
// );`)
// );

// 4. perform crud operation
// insert 1
// console.log(
//   await db.execute(`INSERT INTO users (id, name, email)
// VALUES (1, 'John Doe', 'john@example.com');`)
// );

// Using prepared statement
// await db.execute(
//   `INSERT INTO users (name, email)
// VALUES (?, ?)`,
//   ["Demo", "First"]
// );

const values = [
  ["First", "First"],
  ["Second", "Second"],
  ["Thired", "Thired"],
  ["Fourth", "Fourth"],
];
await db.query(
  `INSERT INTO users (name, email)
VALUES ?`,
  [values]
);

console.log("Record inserted..");
//! read table

const [rows] = await db.execute(`select * from users`);
console.log(rows);
