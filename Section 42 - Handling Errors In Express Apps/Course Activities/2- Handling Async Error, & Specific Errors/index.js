const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// for 'mark-up method' Put, Patch..
const methodOverride = require("method-override");

// Export models/products:
const Product = require("./models/product");
const AppError = require("./AppError");
const { error } = require("console");

// Mongoose: =====
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand2")
  .then(() => {
    console.log("Mongo Connection Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection Error is:", err);
  });
// ====================

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware: ==========
app.use(express.urlencoded({ extended: true })); // for Parsing 'Post'-Request-Body
app.use(methodOverride("_method"));
//  End of Middleware: ==========

const categories = ["fruit", "vegetable", "dairy", "baked goods"];

// Topic: Defining an Async Utility ==========
// Note: Normally declared in seperate file in 'Utilities'
function wrapAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((error) => next(error));
  };
}

app.get(
  "/products",
  wrapAsync(async (req, res) => {
    let products;
    const { category } = req.query;

    if (category && category !== "All") {
      products = await Product.find({ category: category });
    } else {
      products = await Product.find({});
    }

    res.render("products/index", {
      products,
      categories,
      category: category || "All",
    });
  })
);

// Creating Products: ==========
app.get("/products/new", (req, res) => {
  // throw new AppError("NOOOOOOO", 401);
  res.render("products/new", { categories });
});

app.post(
  "/products",
  wrapAsync(async (req, res, next) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`);
  })
);

// Products Details: ==========
app.get(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      // Doc: For errors returned from asynchronous functions invoked by route handlers and middleware,
      // you must pass them to the next() function, where Express will catch and process them.
      throw next(new AppError("Product Not Existing", 404)); // use 'return' prevents, run EJS, or use 'else'
    }
    res.render("products/show", { product });
  })
);

// Updating Products: ==========
app.get(
  "/products/:id/edit",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw next(new AppError("Product Not Existing", 404));
    } else {
      res.render("products/edit", { product, categories });
    }
  })
);

app.put(
  "/products/:id",
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    res.redirect(`/products/${product._id}`);
  })
);

// Deleting Products: ==========
app.delete(
  "/products/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect("/products");
  })
);

// ERROR HANDLERS ==========
// Topic: Differentiating Mongoose Error
// Note: Takeaway is, being able to intercept one particular type of error
const handleValidationError = (err) => {
  console.dir(err);
  return new AppError(`Validation Failed! ...${err.message}`, 400);
};

app.use((err, req, res, next) => {
  console.log(err.name); // Since mongoose error has 'name' property
  if (err.name === "ValidationError") err = handleValidationError(err);
  if (err.name === "CastError") err = handleCastError(err);
  next(err);
});

// Topics: Handling Async Error ========
// Basic Error Handler:
app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went wrong Horribly!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("Listening 3000!!");
});
