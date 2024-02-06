const express = require("express");
const app = express();
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");
const router = require("./routes/shelters");

// only requests to /shelters/* will be sent to our "router"
// can alwats change '/shelters' anytime, saves time
app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);
// ===========

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
