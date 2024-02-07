const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");

// Importing method-override for HTTP method override support
const methodOverride = require("method-override");

// Importing connection and data models
const Connection = require("./connection/connection");
const Product = require("./models/product");
const Farm = require("./models/farm");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware setup: POST body parsing, method override, session, and flash
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
const sessionOptions = {
  secret: "mysecret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));
app.use(flash());
// Doc: https://expressjs.com/en/5x/api.html#res.locals
app.use((req, res, next) => {
  res.locals.messages = req.flash("success");
  next();
});

// INTRODDUCTION FOR FARMS
// -----------------------
// List all Farms
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});

// Create a new farm
app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

app.post("/farms", async (req, res) => {
  const newFarm = new Farm(req.body);
  await newFarm.save();
  req.flash("success", "New farm created successfully");
  res.redirect(`/farms`);
});

// Show farm details
app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products");
  res.render("farms/show", { farm });
});

// Create a new product to a farm
app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  res.render("products/new", { categories, farm });
});

app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const foundFarm = await Farm.findById(id);

  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });

  foundFarm.products.push(newProduct);
  newProduct.farm = foundFarm;

  await foundFarm.save();
  await newProduct.save();

  res.redirect(`/farms/${foundFarm._id}`);
});

// // Delete a farm
app.delete("/farms/:id", async (req, res) => {
  const { id } = req.params;

  const deletedFarm = await Farm.findByIdAndDelete(id);
  res.redirect("/farms");
});

// INTRODDUCTION FOR PRODUCTS
// --------------------------
// Predefined categories for products
const categories = ["fruit", "vegetable", "dairy", "baked goods"];

// List all Products
app.get("/products", async (req, res) => {
  const { category } = req.query;

  let products;

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
});

// Create a new product
// TODO: Update this section
// Note: This section has been marked for future updates. Remember to revisit and make necessary changes.
// app.get("/products/new", (req, res) => {
//   res.render("products/new", { categories });
// });

// app.post("/products", async (req, res) => {
//   const newProduct = new Product(req.body);
//   await newProduct.save();
//   res.redirect(`/products/${newProduct._id}`);
// });

// Show product details
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("farm", "name");
  console.log(product);
  res.render("products/show", { product });
});

// Update product information
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

// Delete a product
// TODO: Update this section
// Note: This section has been marked for future updates. Remember to revisit and make necessary changes.
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.listen(3000, () => {
  console.log("Listening 3000!!");
});
