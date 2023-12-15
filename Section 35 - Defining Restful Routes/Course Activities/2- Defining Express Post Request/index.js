const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Runnning PORT 3000!");
});

// Topic 1: Definimg Express Post Routes
app.get("/tacos", (req, res) => {
  res.send("GET /tacos response");
});

app.post("/tacos", (req, res) => {
  res.send("POST /tacos response");
});

// Topic 2: Parsing The Request Body =====
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/tacos2", (req, res) => {
  //   console.log(req.body);// undefined as default
  const { meat, qty } = req.body;
  res.send(`POST: Ok, here are your ${qty} ${meat} taco/tacos`);
});
