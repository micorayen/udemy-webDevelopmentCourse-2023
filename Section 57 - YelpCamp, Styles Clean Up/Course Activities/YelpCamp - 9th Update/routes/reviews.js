const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

// Require the Campground and Review models
const Campground = require("../models/campground");
const Review = require("../models/review");

// Controllers:
const reviews = require("../controllers/reviews");

// REVIEW ROUTES:
// --------------------
router.post("/", isLoggedIn, validateReview, catchAsync(reviews.creteReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
