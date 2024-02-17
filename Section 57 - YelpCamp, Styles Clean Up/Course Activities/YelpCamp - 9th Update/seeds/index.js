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
  for (let i = 0; i < 10; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "65cdd9a8cfd048eb25c92024",
      location: `${cities[random1000].city} ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      price: price,
      images: [
        {
          url: "https://res.cloudinary.com/dsakqvfw4/image/upload/v1707991124/YelpCamp/bcbx7bl4jzuchd0rjuql.png",
          filename: "YelpCamp/bcbx7bl4jzuchd0rjuql",
        },
        {
          url: "https://res.cloudinary.com/dsakqvfw4/image/upload/v1707990703/YelpCamp/ubpv1tj8sgjob6ttj1ki.jpg",
          filename: "YelpCamp/ubpv1tj8sgjob6ttj1ki",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, nihil id veritatis non error laudantium aspernatur ut eaque, quas, odio quod suscipit at voluptates vitae aut unde architecto dolorum adipisci.",
    });
    await camp.save();
  }
};

// Tip: Close DB connection ==========
seedDB().then(() => {
  mongoose.connection.close();
});
