const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Error is:", err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [100, "Must be at least Php: 1000, got {VALUE}"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },
  size: {
    type: String,
    enum: { values: ["S", "M", "L"], message: "{VALUE} is not supported" },
  },
});

// Topic 11: Model Static Methods ==========
productSchema.statics.fireSale = function () {
  return this.updateMany({}, { onSale: true, price: 0 }); // return, and can just 'await' somewhere.
  // Note: keyword This refers to the 'Entire Model, int this case Product'
};

// Note: always neededto come-after the Instances & Static Methods
const Product = mongoose.model("Product", productSchema);

Product.fireSale().then((res) => {
  //Note:  Colt not gonna bother using Async // silly example
  console.log(res);
});
