const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

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

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware: ==========
// Note: by Default 'Request.body' is Empty: ==========
app.use(express.urlencoded({ extended: true })); // for Parsing 'Post'-Request-Body
app.use(methodOverride("_method"));
//  End of Middleware: ==========

app.listen(3000, () => {
  console.log("Listening 3000!!");
});

app.get("/", (req, res) => {
  res.render("home");
});

// Index Route - Display all campgrounds ==========
app.get("/campgrounds", async (req, res) => {
  const foundCampground = await Campground.find({});
  res.render("campgrounds/index", { foundCampground });
});

// New Route - Show form to create a new campground ==========
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// Create Route - Add new campground to the database ==========
app.post("/campgrounds", async (req, res) => {
  const newCampground = new Campground(req.body.campground);
  await newCampground.save();
  // res.send("Making your Product"); // Checking only
  res.redirect(`/campgrounds/${newCampground._id}`);
});

// Show Route - Display details of a specific campground ==========
app.get("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  const foundCampground = await Campground.findById(id);
  // console.log(foundCampground);
  res.render("campgrounds/show", { foundCampground });
});

// Edit Route - Show form to edit a specific campground ==========
app.get("/campgrounds/:id/edit", async (req, res) => {
  const { id } = req.params;
  const foundCampground = await Campground.findById(id);
  res.render("campgrounds/edit", { foundCampground });
});

// Update Route - Update a specific campground in the database ==========
app.put("/campgrounds/:id", async (req, res) => {
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
});

// Delete Route - Delete a specific campground from the database ==========
app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
});
