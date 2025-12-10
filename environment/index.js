import express from "express";
import path from "path";

const app = express();
console.log(import.meta.dirname);
console.log(import.meta.filename);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/profile/:userName", (req, res) => {
  console.log(req.params);
  res.send(`<h1>My username is ${req.params.userName}</h1>`);
});

app.get("/product", (req, res) => {
  console.log(req.query);
  res.send(`<h1>Product name is ${req.query.productName}</h1>`);
});

app.post("/contract", (req, res) => {
  console.log(req.body);
  res.send("Hi");
});

app.get("/home", (req, res) => {
  // send html content directly
  // res.send("<h1>Hello dude</h1>");

  // send a path for html file
  console.log("Request recived");
  const homePagePath = path.join(import.meta.dirname, "public", "home.html");
  console.log(homePagePath);

  res.sendFile(homePagePath);
});

// const PORT = 3000;

/*
// in powershell => $env:PORT=3001; node --watch .\index.js
// in CMD => set PORT=3001 && node --watch .\index.js
const PORT = process.env.PORT;
*/
/*
 get PORT from the .env file
 run this command => node --env-file=.env --watch index.js
 or
 add below script in package.json and run this command => npm run dev 
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node --env-file=environment.env --watch index.js"
  }
*/
const PORT = process.env.PORT || 3000;

// PORT is getting from environment.env file
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
