const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const { campgroundSchema } = require("./schemas");
const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");

// Import exported-models/products:
const Campground = require("./models/campground");

// for 'mark-up method' Put, Patch..
const methodOverride = require("method-override");

// Mongoose: =====
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// use ejs-locals for all ejs templates:
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware: ==========
// Note: by Default 'Request.body' is Empty: ==========
app.use(express.urlencoded({ extended: true })); // for Parsing 'Post'-Request-Body
app.use(methodOverride("_method"));

const validateCampground = (req, res, next) => {
  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};
//  End of Middleware: ==========

app.get("/", (req, res) => {
  res.render("home");
});

// Index Route - Display all campgrounds ==========
app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const foundCampground = await Campground.find({});
    res.render("campgrounds/index", { foundCampground });
  })
);

// New Route - Show form to create a new campground ==========
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// Create Route - Add new campground to the database ==========
app.post(
  "/campgrounds",
  validateCampground,
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground)
    //   // to customize the 'error message & statusCode' in this route.
    //   throw new ExpressError("Invalid Campground Data.", 400);

    const newCampground = new Campground(req.body.campground);
    await newCampground.save();
    res.redirect(`/campgrounds/${newCampground._id}`);
  })
);

// Show Route - Display details of a specific campground ==========
app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const foundCampground = await Campground.findById(id);
    // console.log(foundCampground);
    res.render("campgrounds/show", { foundCampground });
  })
);

// Edit Route - Show form to edit a specific campground ==========
app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const foundCampground = await Campground.findById(id);
    res.render("campgrounds/edit", { foundCampground });
  })
);

// Update Route - Update a specific campground in the database ==========
app.put(
  "/campgrounds/:id",
  validateCampground,
  catchAsync(async (req, res, next) => {
    const { id } = req.params;

    const campground = await Campground.findByIdAndUpdate(
      id,
      { ...req.body.campground },
      // Spread Operator: creates a new object, maintaining the immutability of the original req.body.campground.
      // in scenarios where you want to avoid directly modifying the original object or need to create a separate copy for manipulation.
      {
        runValidators: true,
        new: true,
      }
    );
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// Delete Route - Delete a specific campground from the database ==========
app.delete(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);

// Error Handling ==========
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found-2", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh no, Something went Wrong!. ";
  res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
  console.log("Listening 3000!!");
});
