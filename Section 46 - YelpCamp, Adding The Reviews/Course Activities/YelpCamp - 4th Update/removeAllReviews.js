const Review = require("./models/review"); // Assuming you have a Review model
const Campground = require("./models/campground"); // Assuming you have a Campground model
const mongoose = require("mongoose");
// Mongoose: =====
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});
// ==================================

const updateAllCampgrounds = async () => {
  // Step 2: Remove all references from all campgrounds
  await Campground.updateMany({}, { $set: { reviews: [] } });

  console.log("All reviews removed successfully from all campgrounds");
};

updateAllCampgrounds();
