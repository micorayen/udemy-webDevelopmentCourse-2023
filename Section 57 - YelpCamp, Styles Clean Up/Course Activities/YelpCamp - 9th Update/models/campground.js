const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

// Topic: Adding a Thumbnail Virtual Property
const ImageSchema = new Schema({
  url: String,
  filename: String,
});

ImageSchema.virtual("thumbnail").get(function () {
  return this.url.replace("/upload", "/upload/w_160,h_150");
});

const CampgroundSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // images: [
  //   {
  //     url: String,
  //     filename: String,
  //   },
  // ],
  images: [ImageSchema],
  price: Number,
  description: String,
  location: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

// Middleware: Delete Route for Campground - to delete every reviews in this campground  ==========
// Doc: https://mongoosejs.com/docs/api/model.html#Model.findByIdAndDelete()
// Doc: https://mongoosejs.com/docs/middleware.html

// Post middleware - post middleware are executed after the hooked method and all of its pre middleware have completed.
// Basic Structure: schema.post('init', function(doc) {});
CampgroundSchema.post("findOneAndDelete", async function (doc) {
  // console.log("Middleware - DELETED.");
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});

module.exports = mongoose.model("Campground", CampgroundSchema);
