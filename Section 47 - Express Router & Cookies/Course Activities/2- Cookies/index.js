const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("mySecret"));

// Topic 2: Cookies Parser Middleware ==========
app.get("/greet", (req, res) => {
  const { name = "John Doe" } = req.cookies;
  res.send(`Hey, There, ${name}`);
});

// Topic 1: Sending Cookies ==========
app.get("/setname", (req, res) => {
  res.cookie("name_v2", "Luna");
  res.cookie("name", "Cokies_v1");
  res.send("Okay sent Cookies");
});

// Topic 3: Signing Cookies ==========
// Note: it's common practice to use all lowercase letters for cookie names. This helps ensure consistency.
app.get("/getsignedcookie", (req, res) => {
  res.cookie("fruit", "grape", { signed: true });
  res.send("View Signed Cookie");
});

// Doc: https://expressjs.com/en/5x/api.html#req.signedCookies
app.get("/verifyfruit", (req, res) => {
  console.log(req.signedCookies);
  res.send(req.signedCookies); // to show signed cookies, not unsigned one
});

// Topic 4: HMAC Signing ==========
// https://www.freeformatter.com/hmac-generator.html

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
