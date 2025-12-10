const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Wel come to home page 1");
    res.end();
  }
});
const port = 8080;

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
