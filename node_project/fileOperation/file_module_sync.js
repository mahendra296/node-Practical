const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// Write file
// fs.writeFileSync(filePath, "This is normal test data", "utf-8");

// add or update the file
fs.appendFileSync(filePath, "This is normal test data", "utf-8");

// read file
// const readFile = fs.readFileSync(filePath);
// console.log(readFile.toString());

const readFile = fs.readFileSync(filePath, "utf-8");
console.log(readFile.toString());

// delete file
// fs.unlinkSync(filePath);

// Rename File path
const newName = "updated.txt";
const newFilePath = path.join(__dirname, newName);
fs.renameSync(filePath, newFilePath);
