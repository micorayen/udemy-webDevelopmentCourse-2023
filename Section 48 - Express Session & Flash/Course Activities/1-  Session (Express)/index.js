const express = require("express");
const session = require("express-session");
const app = express();

const sessionOptions = {
  secret: "mysecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

// Topic 1: Express Session ==========
app.get("/viewcount", (req, res, next) => {
  //   res.send("You have viewed this page, x number/s of times");
  if (req.session.viewcounts) {
    req.session.viewcounts += 1;
  } else {
    req.session.viewcounts = 1;
  }
  res.send(
    `You have viewed this page, ${req.session.viewcounts} number/s of times`
  );
});

// Topic 2: More Express Session ==========
app.get("/register", (req, res, next) => {
  const { username = "Anynomous" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res, next) => {
  const { username } = req.session;
  res.send(`Welcome back, ${username}`);
});

app.listen(3000, () => {
  console.log("Running on Port: 3000");
});
