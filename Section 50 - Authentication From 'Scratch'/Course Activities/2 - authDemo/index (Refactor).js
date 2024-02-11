const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const session = require("express-session");

const User = require("./models/users");

// Method-Override Package:
const methodOverride = require("method-override");

// MongoDB Connection:
mongoose.connect("mongodb://127.0.0.1:27017/authDemo", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// View Engine Setup: Configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware Setup:
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const sessionConfig = {
  secret: "I'm Batman!",
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   httpOnly: true,
  //   expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
  //   maxAge: 1000 * 60 * 60 * 24 * 7,
  // },
};
app.use(session(sessionConfig));

// Topic: Auth Demo - Require Login Middleware =====
const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.send("HOMEPAGE");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  const { password, username } = req.body;
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

//  Topic: Auth Demo - Login =====
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const foundUser = await User.findAndValidate(username, password);
  if (foundUser) {
    req.session.user_id = foundUser._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
});

//  Topic: Staying logged In w/ Session =====
app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.get("/topsecret", requireLogin, (req, res) => {
  res.send("TOP SECRET!!!");
});

app.post("/logout", (req, res) => {
  req.session.user_id = null;
  // req.session.destroy();
  res.redirect("login");
});

app.listen(3000, () => {
  console.log("Serving port: 3000!");
});
