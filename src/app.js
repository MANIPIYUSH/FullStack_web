const express = require("express");
const connectDB = require("./config/database");
const cookieParser = require("cookie-parser");

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Route Imports
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

// Route Handlers
app.use("/", authRouter);
app.use("/profile", profileRouter);
app.use("/request", requestRouter);

// Database Connection & Server Start
connectDB()
  .then(() => {
    console.log("✅ Database connection established...");
    app.listen(7777, () => {
      console.log("🚀 Server running on port 7777...");
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });
