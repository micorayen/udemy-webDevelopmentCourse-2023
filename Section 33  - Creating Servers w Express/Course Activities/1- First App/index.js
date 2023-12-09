const express = require("express");
// Execute
const app = express();
// console.dir(app);

// anytime there incoming request, this callback will run
app.use(() => {
  console.log("We got  a new Request!");
});

// 'http://localhost:3000/'
// We just didnt get a respond: saying were listening/request, but no response:
app.listen(8080, () => {
  console.log("listening on port:3000");
});
