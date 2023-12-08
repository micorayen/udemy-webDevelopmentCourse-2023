// Note: when referencing a file, rather than a existing module like 'fs'.
// you need './' at the beginning,. to make it clear youre referencing something in this directory.
const math = require("./math");

// console.log(math);
console.log(math.square(7));
console.log(math.PI);
console.log(math.add(91, 10));
