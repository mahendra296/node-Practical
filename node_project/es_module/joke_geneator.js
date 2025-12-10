import https from "https";
import chalk from "chalk";

const getJock = () => {
  const baseURL = "https://official-joke-api.appspot.com/random_joke";

  https.get(baseURL, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type} joke :`);
      console.log(chalk.red(`${joke.setup}`));
      console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
    });
    response.on("error", (err) => {
      console.error("Error while fetching the jock", err.message);
    });
  });
};

getJock();
