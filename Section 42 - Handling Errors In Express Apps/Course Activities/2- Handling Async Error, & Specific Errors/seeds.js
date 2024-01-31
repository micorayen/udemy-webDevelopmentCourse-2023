const mongoose = require("mongoose");

// Export models/products:
const Product = require("./models/product");

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

// Note: Seed-file 'Pretty common Practice' to seed DB seperately from WebApp, for development purposes
// we want some data in DB.

// const product1 = new Product({
//   name: "Mango",
//   price: 99,
//   category: "Fruit",
// });

// product1
//   .save()
//   .then((product1) => {
//     console.log(product1);
//   })
//   .catch((err) => {
//     console.log("Error is:", err);
//   });

const seedProducts = [
  {
    name: "Mango",
    price: 99,
    category: "Fruit",
  },
  {
    name: "Apple",
    price: 1.25,
    category: "Fruit",
  },
  {
    name: "Carrot",
    price: 0.5,
    category: "Vegetable",
  },
  {
    name: "Banana",
    price: 0.75,
    category: "Fruit",
  },
  {
    name: "Broccoli",
    price: 1.99,
    category: "Vegetable",
  },
];

Product.insertMany(seedProducts)
  //   .save()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Error is:", err);
  });
