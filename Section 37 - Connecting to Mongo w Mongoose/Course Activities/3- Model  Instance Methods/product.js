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

// Topic 10: Model Instance Methods ==========
// Doc: https://mongoosejs.com/docs/guide.html#methods

// productSchema.methods.greet = function () {
//   // Example of Instance-Method
//   // productSchema.methods.greet = () => {
//   // Reminder: Declare this first before 'Product', so greet will be added to  productSchema
//   console.log("Hello,  Hi!, Aloha!");
//   console.log(`- from ${this.name}`); // 'this' refers to individual instance, in this 'foundProduct'.
//   // console.log(`- from ${this}`);
// };

// const findProduct = async () => {
//   const foundProduct = await Product.findOne({ name: "Cycling Short" });
//   // const foundProduct = await Product.findOne({ name: "Tire Pump" });
//   foundProduct.greet();
// };
// ==================================================

productSchema.methods.toogleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCategory) {
  this.categories.push(newCategory); // keyword This refers to the 'particular product'
  return this.save();
};

const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Cycling Short" });
  console.log(foundProduct); // checking
  await foundProduct.toogleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

// findProduct();
findProduct();
