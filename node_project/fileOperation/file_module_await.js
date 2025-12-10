const fs = require("fs/promises");
const path = require("path");

const fileName = "await.txt";
const filePath = path.join(__dirname, fileName);

const directoryName = __dirname;

// fs.promises
//   .readdir(directoryName)
//   .then((data) => console.log(data))
//   .catch((err) => console.error("Error : ", err))
//   .finally(() => console.log("Finally block"));

// Render Folders
// const rendorFolder = async () => {
//   try {
//     const response = await fs.promises.readdir(directoryName);
//     console.log(response);
//   } catch (error) {
//     console.error("Error while rendor folder : ", error);
//   }
// };

// rendorFolder();

// write file with await

// const writeFile = async () => {
//   try {
//     await fs.writeFile(filePath, "This is await test", "utf-8");
//     console.log("File created successfull");
//   } catch (error) {
//     console.error("Error while write file : ", error);
//   }
// };

// writeFile();

const appendFile = async () => {
  try {
    await fs.appendFile(filePath, "This is await test updated", "utf-8");
    console.log("File updated successfull");
  } catch (error) {
    console.error("Error while update file : ", error);
  }
};

appendFile();

const readFile = async () => {
  try {
    const response = await fs.readFile(filePath, "utf-8");
    console.log(response);
  } catch (error) {
    console.error("Error while read file : ", error);
  }
};

readFile();
