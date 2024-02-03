const mongoose = require("mongoose");
const { Schema } = mongoose;

// Mongoose: =====
mongoose.connect("mongodb://127.0.0.1:27017/relationshipDemo", {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Database connected.");
});

// Topic 2: One To Bajillions ==========
const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: String,
  // Note: not native JS-type, comes from mongoose
  //   user: [{ type: Schema.Types.ObjectId, ref: "User" }],

  // Note: After: Changing it to a single reference signifies that each tweet has a single user.
  // Now, when you populate,
  // Mongoose returns a single object instead of an array, resulting in the expected structure. 'in findTweet()'.
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
  const user = new User({ username: "micorayen@gmail.com", age: 25 });
  const tweet1 = new Tweet({ text: "My Shepherd.", likes: 61 });
  const tweet2 = new Tweet({ text: "The word becomes flesh.", likes: 77 });
  tweet1.user = user;
  tweet2.user = user;
  await user.save();
  await tweet1.save();
  await tweet2.save();
};
// makeTweets();

const makeTweets2 = async () => {
  const user = await User.findOne({ username: "micorayen@gmail.com" });
  const tweet3 = new Tweet({ text: "Thank  you, Brother", likes: 113 });
  tweet3.user = user;
  await tweet3.save();
};
// makeTweets2();

const findTweet = async () => {
  // Note: to get only username, not age, since age is for the profile
  // Doc: https://mongoosejs.com/docs/populate.html#field-selection
  //   const tweet = await Tweet.findOne({}).populate("user", "username");

  const tweets = await Tweet.find({}).populate("user", "username");
  console.log(tweets);
};

findTweet();
