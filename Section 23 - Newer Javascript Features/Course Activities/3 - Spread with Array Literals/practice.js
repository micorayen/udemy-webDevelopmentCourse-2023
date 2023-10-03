
// Topic: Spread in Function Calls--------------------
// =========================
// Examples of when passed 'Iterables' into function() calls=========================

// const nums = [1, 3, 5, 26, 76, 52, -10]

// console.log(Math.max(nums)) // NaN , since is a array
// console.log(Math.max(...nums)) //Triple dots(...), Spread each array index-values as seperated args, hences// 76

// console.log('Mico Rayen')
// console.log(...'Mico Rayen')

// Examples of when passed 'Iterables' with Array Literals=========================
const boys = ['Mico', 'John', 'Marco'] // Imagine if this hundreds of elements long.
const girls = ['Rezy', 'Menda', 'Crystal'] //but you can use 'Spread'

const bothGenders = [...boys, ...girls, 'HAHA'] // Now you have a 3rd Array, combine 1+2
// were Spreading an Array into other Arrays 

// Examples of when passed 'Iterables' with Object Literals=========================
const feline = { legs: 4, family: 'Felidae' }
const canine = { isFurry: true, family: 'Caniae' }

const catDog = { ...feline, ...canine } //Conflict on 'Key - Family', Caniae will win since of order, due to Overwrites.

// Note: Lots of times used when copying objects, which is something you do in 'libraries' like react

//Note: Mutate by copying and adding new key+pair values

// =========================