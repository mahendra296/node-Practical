const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);

const directoryName = __dirname;

fs.promises
  .readdir(directoryName)
  .then((data) => console.log(data))
  .catch((err) => console.error("Error : ", err))
  .finally(() => console.log("Finally block"));

fs.promises
  .writeFile(filePath, "Hello File Created", "utf-8")
  .then(() => console.log("File created sucessfully"))
  .catch((err) => console.error("Error : ", err));

fs.promises
  .appendFile(filePath, "Hello File Updated", "utf-8")
  .then(() => console.log("File updated sucessfully"))
  .catch((err) => console.error("Error : ", err));

fs.promises
  .readFile(filePath, "utf-8")
  .then((data) => console.log("File Data\n", data))
  .catch((err) => console.error("Error : ", err));
