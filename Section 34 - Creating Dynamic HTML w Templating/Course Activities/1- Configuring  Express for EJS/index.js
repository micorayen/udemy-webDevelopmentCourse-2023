const express = require("express");
const app = express();

const path = require("path");

app.listen(3000, () => {
  console.log("3000");
});

app.set("view engine", "ejs");
// Since can't run index.js on other DIR, other where it was located.
// This line 'join', target the 'index.js path' is located
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});
