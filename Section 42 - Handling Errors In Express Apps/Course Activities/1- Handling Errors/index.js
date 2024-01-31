const express = require("express");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

app.use("/", (req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I LOVE DOGS");
  next();
});

const verifyPassword = (req, res, next) => {
  console.log(req.query, "cant read");

  const { password } = req.query;
  if (password === "secrets") {
    next();
  } else {
    // res.send("Sorry you need a Password");#
    throw new AppError("Password required!", 401);
    return;
  }
};
// ===========================

app.get("/", (req, res) => {
  res.send("HOMEPAGE 1");
});

app.get("/dogs", (req, res) => {
  res.send("WOOF, WOOF!");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("My Secret is: No Secret");
});

app.get("/error", (req, res, next) => {
  chicken.fly();
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not Admin!", 403);
});
// Error Handling: ==========
app.use((req, res) => {
  res.status(404).send("NOT FOUND");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Went wrong Horribly!" } = err;
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//   console.log("====== Error Handling ======");
//   res.status(404).send("ERROR HANDLER");
//   // Doc: If you pass anything to the next() function (except the string 'route'),
//   // Express regards the current request as being an error and will skip any remaining non-error handling routing and middleware functions.
//   next(err);
// });

app.listen(3000, () => {
  console.log("App is running on  localhost:3000");
});
