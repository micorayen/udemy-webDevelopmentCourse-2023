const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Mongoose: =====
mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

const userSchema = new Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { _id: false },
      street: String,
      city: String,
      state: String,
      country: { type: String, required: true },
    },
  ],
});

const User = mongoose.model("User", userSchema);

// Topic 1: One to Few ==========
const makeUser = async () => {
  const user = new User({
    first: "Harry",
    last: "Potter",
  });
  user.addresses.push({
    street: "Phase 6",
    city: "Norzagaray",
    state: "Bulacan",
    country: "PH",
  });
  const res = await user.save();
};

// makeUser();

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "Daguma",
    city: "QC",
    state: "Manila",
    country: "PH",
  });
  const res = await user.save();
  console.log(res);
};

addAddress("65b659f444cb33364061806c");

// Topic 2: One to Many ==========
