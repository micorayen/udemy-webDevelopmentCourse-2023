const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand_v3")
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error is:", err);
  });
