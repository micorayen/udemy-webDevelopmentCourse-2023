const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/MovieApp")
  .then(() => {
    console.log("Connection Open!");
  })
  .catch((err) => {
    console.log("Error is:", err);
  });

// Topic 1: Our First Mongoose Model ==========
// { // Thoughts Mapping
//     title: 'Logan',
//     year: 2017,
//     score: 9.2,
//     rating: 'R'
// }

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

// now i have a model-class named 'Movie'
const Movie = mongoose.model("Movie", movieSchema); // 'Movie' 1st-letter most be capitalize
// below, are 'instances' of my Movie-class
// const Logan = new Movie({
//   // This called instance (of Movie)
//   title: "Logan",
//   year: 2017,
//   score: 8.7,
//   rating: "R",
// })

// Reminder: Logan.save() ,in Node for it to take effect.

// Topic 2: Mongoose insert and insertMany ==========
// Reminder: Since 'insertMany' this gonna take time, means in JS you need callback or Promises.
// Movie.insertMany([
//   // insertMany is not common situation, normally one at a time.and in DOC insertMany return promises
//   { title: "Logan", year: 2017, score: 8.7, rating: "R" },
//   { title: "X-Men", year: 2000, score: 7.4, rating: "PG-13" },
//   { title: "X2: X-Men United", year: 2003, score: 7.6, rating: "PG-13" },
//   {
//     title: "X-Men: Days of Future Past",
//     year: 2014,
//     score: 8.0,
//     rating: "PG-13",
//   },
//   { title: "The Wolverine", year: 2013, score: 6.7, rating: "PG-13" },
// ]).then((data) => {
//   console.log("It Worked!!");
//   console.log(data);
// });

// Topic 3: Finding it w/ Mongoose ==========
// Reminders: Queries are thenable - does not give the query you want right-away
// - Movie.find({year: {$gte: 2010}}).then(data=>console.log(data))
// - Movie.findOne({year: {$gte: 2010}}).then(data=>console.log(data)) // find 1st one to match.

// Reminders: .exec() - means full promise "https://mongoosejs.com/docs/promises.html".

// Finding by ID: "https://mongoosejs.com/docs/api/model.html#Model.find()"
// > Movie.find({_id: '6595757dee94ee59eed01951'}).then(m => console.log(m))
// > Movie.findById('6595757dee94ee59eed01951').then(m => console.log(m))s

// Topic 4: Updating w/ Mongoose ==========

// const res = Movie.updateOne({title: 'The Wolverine'},{year: 2014}).then(res => console.log(res))

// In Mongosh:
//The $in - operator selects the documents where the value of a field equals any value in the specified array.

// db.movies.find({title: {$in: ['The Wolverine', 'X-Men: Days of Future Past']}}) // find Multiple

// In Node REPL:
// Movie.updateMany({title: {$in: ['The Wolverine', 'X-Men: Days of Future Past']}}, {score: 10}).then(res => console.log(res))

// In Documentation: Model Methods, 'to update and get results & also cleaner-code'
// - https://mongoosejs.com/docs/api/model.html#Model.findOneAndUpdate()
// - https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate()

// Movie.findOneAndUpdate({title: 'X-Men: Days of Future Past'}, {score: 6.7}, {new: true}).then(res => console.log(res))

// Read This: https://mongoosejs.com/docs/migration.html for 'Deprecation'

// Topic 5: Deleting w/ Mongoose ==========
// Movie.deleteOne({title: 'Logan'}, {new: true}).then(msg => console.log(msg))
//- result: { acknowledged: true, deletedCount: 1 }

// Movie.findOneAndDelete({title: 'Logan'}).then(msg => console.log(msg)) // 'There documents-confirmation'
// Also Notes: Options '{new: true}'doesn't matter in deleting
//- result:
// {
//   _id: new ObjectId('6595757dee94ee59eed0194d'),
//   title: 'Logan',
//   year: 2017,
//   score: 8.7,
//   rating: 'R',
//   __v: 0
// }
