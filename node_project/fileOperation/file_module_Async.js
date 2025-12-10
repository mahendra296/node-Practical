const { error } = require("console");
const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

// Write file async
// fs.writeFile(filePath, "This is normal test data", "utf-8", (error) => {
//   if (error) console.log("Error while wirte file");
//   else console.log("File created successfully");
// });

// add or update the file
fs.appendFile(filePath, "\nThis is normal test data", "utf-8", (error) => {
  if (error) console.log("Error while wirte file");
  else console.log("File updated successful");
});

// read file
fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) console.log("Error while wirte file");
  else console.log(data);
});

// const readFile = fs.readFileSync(filePath, "utf-8");
// console.log(readFile.toString());

// delete file
// fs.unlinkSync(filePath);
