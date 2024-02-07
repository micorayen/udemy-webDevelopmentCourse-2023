const express = require("express");
const router = express.Router();

const catchAsync = require("../utils/catchAsync");
const ExpressError = require("../utils/ExpressError");
// Require the Campground model
const Campground = require("../models/campground");

const { campgroundSchema } = require("../schemas");

// Middleware Setup:
const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

/// CAMPGROUND ROUTES:
// --------------------
// Index Route - Display all campgrounds
router.get(
  "/",
  catchAsync(async (req, res) => {
    const foundCampground = await Campground.find({});
    res.render("campgrounds/index", { foundCampground });
  })
);

// New Route - Show form to create a new campground
router.get("/new", (req, res) => {
  res.render("campgrounds/new");
});

module.exports = router;

// Create Route - Add new campground
router.post(
  "/",
  validateCampground,
  catchAsync(async (req, res, next) => {
    const newCampground = new Campground(req.body.campground);
    await newCampground.save();
    req.flash("success", "Successfully created campground!.");
    res.redirect(`/campgrounds/${newCampground._id}`);
  })
);

// Show Route - Display details of a specific campground
router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const foundCampground = await Campground.findById(id).populate("reviews");
    if (!foundCampground) {
      req.flash("error", "Cannot find that Campground!");
      return res.redirect("/campgrounds");
    }
    res.render("campgrounds/show", { foundCampground });
  })
);

// Edit Route - Show form to edit a specific campground
router.get(
  "/:id/edit",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const foundCampground = await Campground.findById(id);
    if (!foundCampground) {
      req.flash("error", "Cannot find that Campground!");
      return res.redirect("/campgrounds");
    }
    res.render("campgrounds/edit", { foundCampground });
  })
);

// Update Route - Update a specific campground
router.put(
  "/:id",
  validateCampground,
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const campground = await Campground.findByIdAndUpdate(
      id,
      { ...req.body.campground },
      {
        runValidators: true,
        new: true,
      }
    );
    req.flash("success", "Successfully updated campground!.");

    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Delete Route - Delete a specific campground
router.delete(
  "/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);
