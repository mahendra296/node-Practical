import express from "express";
import session from "express-session";
import { shortenRouter } from "./routes/shortener.routes.js";
import { errorHandler, notFoundHandler } from "./utils/error-handler.js";
import flash from "connect-flash";

const app = express();
app.use(flash());
app.use(express.static("public"));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 },
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(shortenRouter);

// 404 handler - must be after all other routes
app.use(notFoundHandler);

// Global error handler - must be last
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
