const jokes = require("give-me-a-joke");
const colors = require("colors");
// console.dir(giveMeAJoke)

// To get a random dad joke
jokes.getRandomDadJoke((joke) => {
  console.log(joke.rainbow.inverse.underline.red);
});

// To get a customized joke
// let fn = "Mico";
// let ln = "Rayen";

// jokes.getCustomJoke(fn, ln, function (joke) {
//   console.log(joke);
// });

// To get a random Joke of the Day
// let category = "blonde";
// jokes.getRandomJokeOfTheDay(category, function (joke) {
//   // NOTE: The service provider has made the restriction of 5 calls an hour for RandomJokeOfTheDay
//   console.log(joke);
// });
