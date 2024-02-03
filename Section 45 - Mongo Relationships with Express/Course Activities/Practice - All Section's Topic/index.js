const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// for 'mark-up method' Put, Patch..
const methodOverride = require("method-override");

// Export models/products:
const Product = require("./models/product");
const Farm = require("./models/farm");

// Mongoose: =====
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand_v3")
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

// *FARMS **************************************************
// Products Index: ==========
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farms/index", { farms });
});

// Creating Farms: ==========
app.get("/farms/new", (req, res) => {
  res.render("farms/new");
});

app.post("/farms", async (req, res) => {
  const newFarm = new Farm(req.body);
  await newFarm.save();
  // res.redirect(`/farms/${newFarm._id}`);
  res.redirect(`/farms`);
});

// Farms Details: ==========
app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products");
  res.render("farms/show", { farm });
});

// Creating Product for A Farm: ==========
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
  res.redirect(`/farms/${foundFarm._id}`); // Note: {farm._id}, use the id coming from Mongo, not params
});

// Deleting Products: ==========
// Topic: Deletion Mongoose  Middleware ==========
app.delete("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const deletedFarm = await Farm.findByIdAndDelete(id);
  res.redirect("/farms");
});

// *PRODUCTS **************************************************
// Tangent on Category Selection: ==========
const categories = ["fruit", "vegetable", "dairy", "baked goods"];

// Products Index: ==========
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

// Creating Products: ==========
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect(`/products/${newProduct._id}`);
});

// Products Details: ==========
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id).populate("farm", "name");
  console.log(product);
  res.render("products/show", { product });
});

// Updating Products: ==========
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

// Deleting Products: ==========
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.listen(3000, () => {
  console.log("Listening 3000!!");
});
