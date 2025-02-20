const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://piyushmanic:9qXqkgy9oph1fhmS@cluster0.rdeyf.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
