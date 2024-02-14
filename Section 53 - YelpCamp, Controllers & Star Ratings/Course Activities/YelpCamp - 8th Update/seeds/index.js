const mongoose = require("mongoose");

// Import exported-models & files:
const Campground = require("../models/campground");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");

mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// Randomize Datas in imported SeedHelper file ===========
const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 20; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "65c5a2ad117e3bc62d9e940c",
      location: `${cities[random1000].city} ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil id veritatis non error laudantium aspernatur ut eaque, quas, odio quod suscipit at voluptates vitae aut unde architecto dolorum adipisci.",
      price: price,
    });
    await camp.save();
  }
};

// Tip: Close DB connection ==========
seedDB().then(() => {
  mongoose.connection.close();
});
