const mongoose = require("mongoose");

// Import exported-models & files:
const User = require("../models/users");

mongoose.connect("mongodb://127.0.0.1:27017/authDemo", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// Randomize Datas in imported SeedHelper file ===========

const seedDB = async () => {
  // await User.deleteMany({});

  const user = new User({
    username: "micorayen",
    password: "password",
  });
  await user.save();
};

// Tip: Close DB connection ==========
seedDB().then(() => {
  mongoose.connection.close();
});
