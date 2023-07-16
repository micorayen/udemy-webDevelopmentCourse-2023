console.log("First JS")
let num1 = 3 + 1;


// Topic: If, Elseif, and Else Statement  --------------------
// Example 1: Random Numbers, 1-10 ----------
// let randomNum = Math.random()
// randomNum = Math.floor(randomNum * 10) + 1

// if (randomNum <= 3) {
//     console.log("Your number is less than equal 3")
//     console.log(`the random number is: ${randomNum}`)

// } else if (randomNum <= 6) {
//     console.log("Your number is less than equal 6")
//     console.log(`the random number is: ${randomNum}`)
// } else {
//     console.log("Your Random number is 7 or higher")
//     console.log(`the random number is: ${randomNum}`)
// }

// Example 2 : Enter Age ----------
// let age = prompt();

// if (age <= 18) {
//     console.log("Your age dictates you're a Minor")
//     console.log(`You're ${age} years of age.`)

// } else if (age < 59) {
//     console.log("Your age dictates you're a Adult")
//     console.log(`You're ${age} years of age.`)

// } else {
//     console.log("Your age dictates you're a Senior Citizen")
//     console.log(`You're ${age} years of age.`)
// }

// Exercise: Password Validation ----------
// let password = prompt("please enter password:").trim();

// //  Objective: password must have 6+ characters
// if (password.length > 6) {
//     //  Objective: password cannot contain spaces
//     if (password.indexOf(' ') === -1) {
//         console.log("Valid password!")
//         console.log(`You entered: "${password}"`)
//     } else {
//         console.warn("Password cannot contain spaces!")
//     }

// } else {
//     console.warn("Password too short!, must be 6+ characters")
// }

// Topic: Logical Operators; AND. OR, and NOT  --------------------
// // Exercise: Logical AND ----------
// const password = prompt("please enter password:").trim();

// //  Objective: password must have 6+ characters and cannot contain spaces
// if (password.length > 6 && password.indexOf(' ') === -1) {
//     console.log("Valid password!")
//     console.log(`You entered: "${password}"`)
// } else {
//     console.warn("password must have 6+ characters and cannot contain spaces!")
// }

// Exercise: Logical OR ----------
// const age = prompt("please enter age:").trim();

// //  Objective: Pay by age: 0-7 free, 8-12 $10, 13-17 $15, 18-60 $20, and 60+ free
// if ((age >= 0 && age <= 7) || age >= 60) {
//     console.log("Free")
// } else if (age >= 8 && age <= 12) {
//     console.log("$10.00")
// } else if (age >= 13 && age <= 17) {
//     console.log("$15.00")
// } else if (age >= 18 && age <= 60) {
//     console.log("$20.00")
// } else {
//     console.log("Invalid Age!")
// }

// Exercise: Logical NOT ----------
// const age = prompt("please enter age:").trim();

// // Objective: Pay by age: 0-7 and 60+ years old, should have free pass
// if (!(age >= 0 && age <= 7 || age >= 60)) {
//     console.log("You're do not have a free pass!")
// } else {
//     console.log("Free pass")

// }

// Topic: The Switch statement is a lot  --------------------
// const day = 7;

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//     case 7:
//         console.log("Weekend!")
//         break;
//     default:
//         console.log("Invalid Input!")
// }