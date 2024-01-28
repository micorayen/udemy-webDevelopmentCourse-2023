const express = require("express");
const app = express();

const morgan = require("morgan");

// Middleware: ==========
// app.use(morgan("tiny"));
// app.use(morgan("dev"));
// app.use(morgan("common"));
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Topic 2: Defining our own Middleware: ==========
// app.use((req, res, next) => {
//   console.log("This is my 1st Middleware!");
//   next();
//   console.log("After my 1st Middleware! - After calling Next");
// });
// app.use((req, res, next) => {
//   console.log("This is my 2nd Middleware!");
//   next();
// });

// Topic 3: More Middleware Practice: ==========
app.use("/", (req, res, next) => {
  // req.method = "GET";
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  next();
});

// Topic 5: Password Middleware Demo (Not Real AUTH): ==========
const verifyPassword = (req, res, next) => {
  console.log(req.query, "cant read");

  const { password } = req.query;
  if (password === "secrets") {
    next();
  } else {
    res.send("Sorry you need a Password");
    return;
  }
};
// End of Middleware: ==========

app.get("/", (req, res) => {
  // console.log(`Request Date: ${req.requestTime}`);
  res.send("HOMEPAGE 1");
});

app.get("/dogs", (req, res) => {
  // console.log(`Request Date: ${req.requestTime}`);
  res.send("WOOF, WOOF!");
});

// Topic 6: Protecting Specific Routes: ==========
// Doc: https://expressjs.com/en/5x/api.html#app.get.method
// structure: app.get(path, callback [, callback ...]) //callback can act as Middleware
// Note: Colt: this is actually quite a common practice
app.get("/secret", verifyPassword, (req, res) => {
  res.send("My Secret is: No Secret");
});

// Topic 4: Setting UP a 404 ROUTE: ==========
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.listen(3000, () => {
  console.log("App is running on  localhost:3000");
});
