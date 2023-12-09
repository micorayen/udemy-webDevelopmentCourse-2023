const express = require("express");
// Execute
const app = express();
// console.dir(app);

// anytime there incoming request, this callback will run
app.use((req, res) => {
  console.log("We got  a new Request!");
  // console.dir(req);
  //- Sends a HTTP Response: based on request
  // res.send("Hello, got your Request, THis is a ressponse");
  // res.send({ color: "red" });
  res.send("<h1>This is a Webpage!</h1>");
});

// 'http://localhost:3000/'
// We just didnt get a respond: saying were listening/request, but no response:
app.listen(3000, () => {
  console.log("listening on port:3000");
});
