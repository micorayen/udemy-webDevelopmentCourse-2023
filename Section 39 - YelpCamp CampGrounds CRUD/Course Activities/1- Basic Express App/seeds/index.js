const mongoose = require("mongoose");

// Import exported-models & files:
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

// Mongoose: =====
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});
// ==================================

// Random Datas in imported SeedHelper file ===========
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 5; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const camp = new Campground({
      location: `${cities[random1000].city} ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
    });
    await camp.save();
  }
};

// Tip: Close DB connection ==========
seedDB().then(() => {
  mongoose.connection.close();
});
