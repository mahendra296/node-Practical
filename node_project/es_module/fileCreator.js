import { error } from "console";
import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter your filename : ", (fileName) => {
    rl.question("Enter your filename : ", (content) => {
      fs.writeFile(`${fileName}.txt`, content, (error) => {
        if (error) {
          console.error("Error while creating the file : ", error.message);
        } else {
          console.log(`file "${fileName}.txt" created successfully!`);
        }
        rl.close();
      });
    });
  });
};

fileCreation();
