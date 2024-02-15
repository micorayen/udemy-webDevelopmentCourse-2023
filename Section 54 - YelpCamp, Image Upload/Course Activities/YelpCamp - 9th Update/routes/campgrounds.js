const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");

// Cloudinary - For Images
const multer = require("multer");
const { storage } = require("../cloudinary"); //node, automatically looks  to 'index.js'
const upload = multer({ storage });
// const upload = multer({ dest: "uploads/" });

// Require the Campground model
const Campground = require("../models/campground");

// Controllers:
const campgrounds = require("../controllers/campgrounds");

/// CAMPGROUND ROUTES:
// --------------------
// .post(
//   isLoggedIn,
//   validateCampground,
//   catchAsync(campgrounds.createCampground)
// );
router
  .route("/")
  .get(catchAsync(campgrounds.index))
  .post(
    isLoggedIn,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.createCampground)
  );

// .post(upload.array("image"), (req, res) => {
//   console.log("BODY: ", req.body);
//   console.log("FILES: ", req.files);
//   // console.log(req.body, req.files);
//   // res.send("Worked");
// });

router.get("/new", isLoggedIn, campgrounds.renderNewForm);

router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.updateCampground)
  )
  .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

module.exports = router;
