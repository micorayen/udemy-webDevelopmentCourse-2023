const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose: =====
mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// Topic 2: One to Many ==========
const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Spring", "Summer", "Fall", "Winter"],
  },
});

const farmSchema = new Schema({
  name: String,
  city: String,
  // Note: not native JS-type, comes from mongoose
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

// Product.insertMany([
//   {
//     name: "Cozy Winter Blanket",
//     price: 39.99,
//     season: "Winter",
//   },
//   {
//     name: "Sunflower Dress",
//     price: 49.99,
//     season: "Summer",
//   },
//   {
//     name: "Refreshing Lemonade Set",
//     price: 19.99,
//     season: "Spring",
//   },
// ]);
const makeFarm = async () => {
  const farm = new Farm({ name: "Agila Farm", city: "St. Maria, Norzagaray" });
  const blanket = await Product.findOne({ name: "Cozy Winter Blanket" });
  farm.products.push(blanket);
  await farm.save();
  console.log(farm);
};
// makeFarm();

const addProduct = async () => {
  const farm = await Farm.findOne({ name: "Agila Farm" });
  const dress = await Product.findOne({ name: "Sunflower Dress" });
  const set = await Product.findOne({ name: "Refreshing Lemonade Set" });
  farm.products.push(dress);
  farm.products.push(set);
  await farm.save();
  console.log(farm);
};
// addProduct();

// Topic 3: Mongoose Populate ==========
Farm.findOne({ name: "Agila Farm" })
  .populate("products")
  .then((farm) => console.log(farm));
