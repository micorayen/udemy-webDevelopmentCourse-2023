const Campground = require("../models/campground");
const { cloudinary } = require("../cloudinary");

module.exports.home = async (req, res) => {
  // const foundCampground = await Campground.find({});
  // res.render("campgrounds/index", { foundCampground });
};

module.exports.index = async (req, res) => {
  const foundCampground = await Campground.find({});
  res.render("campgrounds/index", { foundCampground });
};

module.exports.renderNewForm = (req, res) => {
  res.render("campgrounds/new");
};

module.exports.createCampground = async (req, res, next) => {
  const newCampground = new Campground(req.body.campground);
  newCampground.images = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));

  newCampground.author = req.user._id; // add userId as author of campground
  await newCampground.save();
  //
  // console.log("NEWLY: ", newCampground);
  req.flash("success", "Successfully created campground!.");
  res.redirect(`/campgrounds/${newCampground._id}`);
};

module.exports.showCampground = async (req, res) => {
  const { id } = req.params;
  const foundCampground = await Campground.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("author");

  if (!foundCampground) {
    req.flash("error", "Cannot find that Campground!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/show", { foundCampground });
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const foundCampground = await Campground.findById(id);

  if (!foundCampground) {
    req.flash("error", "Cannot find that Campground!");
    return res.redirect("/campgrounds");
  }
  res.render("campgrounds/edit", { foundCampground });
};

module.exports.updateCampground = async (req, res, next) => {
  const { id } = req.params;

  const campground = await Campground.findByIdAndUpdate(
    id,
    { ...req.body.campground },
    {
      runValidators: true,
      new: true,
    }
  );
  const imgs = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  campground.images.push(...imgs); // take data on the array, pass into push (dont push the array itself), (spread operator).
  await campground.save(); // Update this: don't double-update

  // Topic: Deleting Images Backend
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await campground.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
  }
  req.flash("success", "Successfully updated campground!.");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
};
