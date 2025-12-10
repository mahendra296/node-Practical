const EventEmitter = require("events");
const path = require("path");
const fs = require("fs");

const emmitter = new EventEmitter();

const CACHE_FILE = path.join(__dirname, "userSummary.cache.json");

let userSummary = {
  userLogin: 0,
  userLogout: 0,
  userUpdate: 0,
};

// Load from cache file if exists
function loadFromCache() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const data = fs.readFileSync(CACHE_FILE, "utf8");
      userSummary = JSON.parse(data);
      console.log("Loaded from cache:", userSummary);
    }
  } catch (error) {
    console.error("Error loading cache:", error.message);
  }
}

// Save to cache file
function saveToCache() {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(userSummary, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving cache:", error.message);
  }
}

// Load cache on startup
loadFromCache();

emmitter.on("userLogin", () => {
  userSummary.userLogin++;
  console.log("User logged in");
  saveToCache();
});

emmitter.on("userLogout", () => {
  userSummary.userLogout++;
  console.log("User logged out");
  saveToCache();
});

emmitter.on("userUpdate", () => {
  userSummary.userUpdate++;
  console.log("User updated");
  saveToCache();
});

emmitter.on("userSummary", () => {
  console.log("User summary : ", userSummary);
});

emmitter.emit("userLogin");
emmitter.emit("userLogout");
emmitter.emit("userUpdate");
emmitter.emit("userSummary");
