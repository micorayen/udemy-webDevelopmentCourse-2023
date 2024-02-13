const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

// Require the Campground and Review models
const Campground = require("../models/campground");
const Review = require("../models/review");

// REVIEW ROUTES:
// --------------------
// Create Route - Add a new review
router.post(
  "/",
  isLoggedIn,
  validateReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);

    review.author = req.user._id; // add author to each reviews
    campground.reviews.push(review);

    await review.save();
    await campground.save();
    req.flash("success", "Successfully created a review");
    res.redirect(`/campgrounds/${campground.id}`);
  })
);

// Delete Route - Delete a specific review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Review.findByIdAndDelete(reviewId);
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    req.flash("success", "Successfully deleted a review");

    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
