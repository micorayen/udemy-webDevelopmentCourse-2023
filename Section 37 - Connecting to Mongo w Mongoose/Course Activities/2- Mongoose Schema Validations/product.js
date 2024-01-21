const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open!");
    // Note: 'Operation Buffering' - allow to use 'Model' we defined, w/o having to wait
  })
  .catch((err) => {
    console.log("Error is:", err);
  });

const productSchema = new mongoose.Schema({
  // name: String, rather than this,

  // URL: https://mongoosejs.com/docs/schematypes.html
  // Topic 6: Mongoose Schema Validators ==========
  // Topic 7: Additonal Schema Constraints ==========
  name: {
    // 'you can have build-in validations'
    type: String,
    required: true,
    maxLength: 20, // The Error Is: Path `name` (`Mountain Bike22222222222`) is longer than the maximum allowed length (20).
  },
  // price: Number, // type - 'form validation but not requiring we pass a number, since String will work'.
  price: {
    type: Number,
    required: true,
    min: [100, "Must be at least Php: 1000, got {VALUE}"],
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: {
    type: [String], // Array only consiting of String
    default: ["Cycling"],
  },
  qty: {
    // Note: Object where there, key-value pairs that Nested
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
    enum: { values: ["S", "M", "L"], message: "{VALUE} is not supported" }, // a group of things validations
  },
});

const Product = mongoose.model("Product", productSchema);

// const bike = new Product({
// name: "Mountain Bike v2",
//   price: 18000,
//   onsale: true,
//   categories: ["Cycling", "Safety"],
// });
// // const bike = new Product({ price: 18000 }); // if you save this, it will error 'name is required'
// // const bike = new Product({ name: "Mountain Bike", price: "18000" }); // price, can be turn into number

// bike
//   .save()
//   .then((data) => {
//     console.log("No Error, It Worked!!!", data);
//   })
//   .catch((err) => {
//     // console.log("The Error Is:", err.errors);
//     console.log("The Error Is:", err.errors.name.properties.message); // 'more direct error message'
//   });

const bike = new Product({
  name: "Cycling Short",
  price: 1800,
  onsale: true,
  categories: ["Cycling", "Parts"],
  size: "M",
}).save();
// const bike = new Product({ price: 18000 }); // if you save this, it will error 'name is required'
// const bike = new Product({ name: "Mountain Bike", price: "18000" }); // price, can be turn into number

// Topic 8: Validating Mongoose Updates ==========
// Topic 9: Mongoose Validation Errors ==========
// Doc: https://mongoosejs.com/docs/validation.html#custom-error-messages // min: [100, "Must be at least Php: 1000, got {VALUE}"],
// Doc: enum: { values: ["S", "M", "L"], message: "{VALUE} is not supported" }, // a group of things validations

// Product.findOneAndUpdate(
//   { name: "Tire Pump" },
//   { price: -19.99 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("No Error, It Worked!!!", data);
//   })
//   .catch((err) => {
//     // console.log("The Error Is:", err.errors.name.properties.message); // 'more direct error message'
//     console.log("The Error Is:", err);
//   });
