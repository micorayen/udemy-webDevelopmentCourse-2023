const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Error is:", err);
  });

// Topic 13: Defining Mongoose Middleware ==========
// Doc: https://mongoosejs.com/docs/middleware.html

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

personSchema
  .virtual("fullname")
  .get(function () {
    // Note: this is diff to instance-methods, since it'll behave a actual property
    return `${this.first} ${this.last}`;
  })
  .set(function (v) {
    // set Value, to seemingly update first & last, by person.fullname = 'Mico Rayen'
    console.log(v);
    this.first = v.substr(0, v.indexOf(" "));
    this.last = v.substr(v.indexOf(" ") + 1);
  });

personSchema.pre("save", async function () {
  // run some code 'before' something happen
  this.first = "Pre: first name";
  this.last = "Pre: last name";
  console.log(`About to save!!`);
});
personSchema.post("save", async function () {
  // run some code 'after' something happen
  console.log(`Just Saved!!`);
});

const Person = mongoose.model("Person", personSchema);
