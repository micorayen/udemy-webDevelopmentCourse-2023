const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcryptjs");

// Schema:
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username cannot be blank!."],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank!."],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  if (!foundUser) return false; // If user not found, return false

  const isValid = await bcrypt.compare(password, foundUser.password);
  return isValid ? foundUser : false;
};

userSchema.pre("save", async function (next) {
  // 'next()', will call 'save' as next
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12); //password is already on 'this'
  next();
});

module.exports = mongoose.model("User", userSchema);
