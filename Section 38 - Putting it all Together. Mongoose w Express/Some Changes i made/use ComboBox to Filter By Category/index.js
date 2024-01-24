const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

// for 'mark-up method' Put, Patch..
const methodOverride = require("method-override");

// Export models/products:
const Product = require("./models/product");

// Mongoose: =====
mongoose
  .connect("mongodb://127.0.0.1:27017/farmStand")
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

app.listen(3000, () => {
  console.log("Listening 3000!!");
});

// Topic 7: Tangent on Category Selection: ==========
const categories = ["fruit", "vegetable", "dairy", "baked goods"];

// Topic 3: Products Index: ==========
// Tips: use this 'Async Route handler' when we 'await' some Mongoose operations & responding, is Common.
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

  // console.log(products); // for checking
});

// Topic 5: Creating Products: ==========
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  // res.send("Making your Product"); // Checking only
  res.redirect(`/products/${newProduct._id}`);
});

// Topic 4: Products Details: ==========
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);
  res.render("products/show", { product });
});

// Topic 6: Updating Products: ==========
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});

// Topic 8: Deleting Products: ==========
// Reminder: async, since it takes time to delete
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
  // console.log(req.body); // Tips: checking, 'to make sure data coming from the EJS-Form.'
});
