const EventEmitter = require("events");

const emmitter = new EventEmitter();

emmitter.on("onClick", () => {
  console.log("On click called");
});

emmitter.on("demo", (obj) => {
  console.log(`https://${obj.host}:${obj.port}`);
});

emmitter.emit("onClick");

emmitter.emit("demo", { host: "localhost", port: "8080" });
