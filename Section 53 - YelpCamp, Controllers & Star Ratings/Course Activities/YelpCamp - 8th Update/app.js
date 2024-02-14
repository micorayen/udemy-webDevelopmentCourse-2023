const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("./models/user");

// Import routes for campgrounds and reviews
const userRoutes = require("./routes/users");
const campgroundRoutes = require("./routes/campgrounds");
const reviewRoutes = require("./routes/reviews");

// MongoDB Connection:
mongoose.connect("mongodb://127.0.0.1:27017/yelp-camp", {});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// View Engine Setup: Configuration
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware Setup:
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public")); // serve 'public-dir'

const sessionConfig = {
  secret: "imbatman",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expire: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};
app.use(session(sessionConfig));
app.use(flash());

// Passport:
app.use(passport.initialize());
app.use(passport.session());
// Doc: https://github.com/saintedlama/passport-local-mongoose#readme (Static methods)
passport.use(new LocalStrategy(User.authenticate())); // where Authentication
passport.serializeUser(User.serializeUser()); // Strored Data
passport.deserializeUser(User.deserializeUser()); // Un-Strored Data
app.get("/fakeUser", async (req, res) => {
  const user = new User({ email: "mico@gmail.com", username: "micorayen" });

  const newUser = await User.register(user, "password1");
  res.send(newUser); // 'pbkdf2 algorithm' - for hash
});

// Locals - have access for all templates
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// Set up middleware for handling routes
app.use("/", userRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/reviews", reviewRoutes);

/// CAMPGROUND ROUTES:
// --------------------
app.get("/home", (req, res) => {
  res.send("home");
});

// Error Handling
// --------------------
// Page Not Found Route
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// Generic Error Handling Middleware
app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) err.message = "Oh no, something went wrong!";
  res.status(statusCode).render("error", { err });
});

app.listen(3000, () => {
  console.log("Listening 3000!!");
});
