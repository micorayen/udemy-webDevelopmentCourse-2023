const express = require("express");
const app = express();

const path = require("path");
const starwarsData = require("./starwars.json");
const subredditData = require("./data.json");
// console.log(starWarsData);

// Topic: 7- Serving Static Assets in Express
// app.use(express.static("public")); // Direct path to index.js
app.use(express.static(path.join(__dirname, "public"))); // absolute path to public files'

app.listen(3000, () => {
  console.log("3000");
});

app.set("view engine", "ejs");
// Since can't run index.js on other DIR, other where it was located.
// This line 'join', target the 'index.js path' is located
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

// Topic Passing Data to Templates ====================
app.get("/random", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  res.render("random", { randomNum }); // pass value  and varName the same
});

// Topic: Subreddit Template Demo ====================
// app.get("/r/:subreddit", (req, res) => {
//   const { subreddit } = req.params;
//   res.render("subreddit", { subreddit });
// });

// Topic: Conditionals in EJS ====================
app.get("/oddOrEven", (req, res) => {
  const randomNum = Math.floor(Math.random() * 10) + 1;
  res.render("conditionalEJS", { randomNum });
});

// Topic: Loops in EJS ====================
app.get("/loopInEJS", (req, res) => {
  const dogs = ["Cream", "Soul", "Muko", "Luna"];

  res.render("loopInEJS", { dogs });
});

// Topic: A More Complex Subreddit Demo ====================
app.get("/q/:starwars", (req, res) => {
  const { starwars } = req.params;
  const data = starwarsData[starwars];
  console.log(data);
  // // res.render("subreddit", { parameter });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = subredditData[subreddit];

  if (data) {
    res.render("subreddit", { ...data }); //  '...', gives access to object-items
  } else {
    res.render("notFound", { subreddit });
  }
});
