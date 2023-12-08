const PI = 3.14159;
const add = (x, y) => x + y;
const square = (x) => x * x;

// Best Approach: Based on my Opinion ===============
const math = {
  add: add,
  PI: PI,
  square: square,
};
module.exports = math;

// Approach 1: ===============
// module.exports.add = add; // we want '.add' = to declared-function 'add'
// module.exports.square = square;
// module.exports.PI = PI;

// Approach 2: Direct===============
// module.exports.PI = 3.14159;
// module.exports.add = (x, y) => x + y;
// module.exports.square = (x) => x * x;

// Approach 3: Node Shorcut 'exports', as long 'export' are pre-declared===============
// exports.PI = 3.14159;
// exports.add = (x, y) => x + y;
// exports.square = (x) => x * x;
