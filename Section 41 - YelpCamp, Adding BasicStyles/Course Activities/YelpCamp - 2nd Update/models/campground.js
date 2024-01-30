const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  price: Number,
  description: String,
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Campground", CampgroundSchema);
