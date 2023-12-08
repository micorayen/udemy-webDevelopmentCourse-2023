const figlet = require("figlet");
const colors = require("colors");

figlet("HI, Mico", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir("Error is:", err);
    return;
  }
  console.log(data.green);
});
