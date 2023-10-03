
// Topic: Spread in Function Calls--------------------
// =========================
// Examples of when passed 'Iterables' into function() calls=========================

const nums = [1, 3, 5, 26, 76, 52, -10]

console.log(Math.max(nums)) // NaN , since is a array
console.log(Math.max(...nums)) //Triple dots(...), Spread each array index-values as seperated args, hences// 76

console.log('Mico Rayen')
console.log(...'Mico Rayen')


// =========================