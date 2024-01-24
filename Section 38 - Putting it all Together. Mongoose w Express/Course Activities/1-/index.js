const express = require("express");
const app = express();
const path = require("path");

// Mongoose: =====
const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error is:", err);
  });
// ====================

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000, () => {
  console.log("Listening 3000!!");
});

app.get("/dog", (req, res) => {
  res.send("HEY HEY12");
});
