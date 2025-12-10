import readline from "readline";

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const handleInput = (option) => {
  if (option == "1") {
    r1.question("Enter the task => ", (task) => {
      todos.push(task);
      console.log("Task added : ", task);
      showMenu();
    });
  } else if (option == "2") {
    console.log("\nYour todo list");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option == "3") {
    console.log("\nGood By...🙋");
    r1.close();
  } else {
    console.log("Invalid option. Please try again");
    showMenu();
  }
};
const showMenu = () => {
  console.log("\n1: Add a task");
  console.log("2: View task");
  console.log("3: Exit");

  r1.question("Choose your option => ", handleInput);
};

showMenu();
