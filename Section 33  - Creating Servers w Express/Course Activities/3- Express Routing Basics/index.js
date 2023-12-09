const express = require("express");
// Execute
const app = express();
// console.dir(app);

// 'http://localhost:3000/'
// We just didnt get a respond: saying were listening/request, but no response:
app.listen(3000, () => {
  console.log("listening on port:3000");
});

// Topics: The Request and Response Objects =========================
// anytime there incoming request, this callback will run
// and anytime that hit 'res.send', that 1 req is done.
// app.use((req, res) => {
//   console.log("We got  a new Request!");
//   // console.dir(req);
//   //- Sends a HTTP Response: based on request
//   // res.send("Hello, got your Request, THis is a ressponse");
//   // res.send({ color: "red" });
//   res.send("<h1>This is a Webpage!</h1>");
// });

// Topics: Express Routing Basics =========================
// cats => 'meow'
// This for 'Get Request' only response
app.get("/cats", (req, res) => {
  res.send("Meow, Meow!.");
  // after Hosting, it must be 'MyHomepage.com/cats'
});

// This for 'Post Request' only response
app.post("/cats", (req, res) => {
  res.send("Meow, Meow!.");
});

// dogs => 'Bark'
app.get("/dogs", (req, res) => {
  res.send("Bark, Bark!.");
});
// '/' - Root route
app.get("/", (req, res) => {
  res.send("This is Homepage!");
  // after Hosting, it must be 'MyHomepage.com'
});

// '*' - Means all, but this must come in the end, since 'res.send' trigger only once.
app.get("*", (req, res) => {
  res.send("I dont know that path!");
  // after Hosting, it must be 'MyHomepage.com'
});
