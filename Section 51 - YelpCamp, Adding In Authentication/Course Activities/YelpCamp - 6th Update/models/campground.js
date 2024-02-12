const mongoose = require("mongoose");
const Review = require("./review");
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
