const Campground = require("../models/campground");
const Review = require("../models/review");

module.exports.creteReview = async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  const review = new Review(req.body.review);

  review.author = req.user._id; // add author to each reviews
  campground.reviews.push(review);

  await review.save();
  await campground.save();
  req.flash("success", "Successfully created a review");
  res.redirect(`/campgrounds/${campground.id}`);
};

module.exports.deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  await Review.findByIdAndDelete(reviewId);
  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
  req.flash("success", "Successfully deleted a review");

  res.redirect(`/campgrounds/${id}`);
};
