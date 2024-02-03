const mongoose = require("mongoose");
const { Schema } = mongoose;

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
    enum: ["fruit", "vegetable", "dairy", "baked goods"],
  },
  farm: [
    {
      type: Schema.Types.ObjectId,
      ref: "Farm",
    },
  ],
});

// Compile Our Model: Creating a model ==========
const Product = mongoose.model("Product", productSchema);

// Exports: ==========
module.exports = Product;
