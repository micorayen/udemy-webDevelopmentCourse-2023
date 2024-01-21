const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/shopApp")
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Error is:", err);
  });

// Topic 12: Mongoose Virtuals ==========
// Doc: https://mongoosejs.com/docs/guide.html#virtuals

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

const Person = mongoose.model("Person", personSchema);

// Terminal: Node REPL
// > const john = new Person({ first: 'John', last: 'Snow' });

// > john.fullname
// > john.save()

// > John.fullname = 'Sam Tarly'
