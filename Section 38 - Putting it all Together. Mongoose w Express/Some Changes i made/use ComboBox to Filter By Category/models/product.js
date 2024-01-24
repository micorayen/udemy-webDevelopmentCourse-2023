const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://127.0.0.1:27017/MovieApp")
//   .then(() => {
//     console.log("Connection Open!");
//   })
//   .catch((err) => {
//     console.log("Error is:", err);
//   });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    lowercase: true,
    enum: ["fruit", "vegetable", "dairy"],
  },
});

// Compile Our Model: Creating a model ==========
const Product = mongoose.model("Product", productSchema);

// Exports: ==========
module.exports = Product;
