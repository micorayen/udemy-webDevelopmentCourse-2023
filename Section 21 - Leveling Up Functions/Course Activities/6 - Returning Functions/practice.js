
// Topic: Returning Functions--------------------
// =========================

// function makeMysteryfunc() {
//     const rand = Math.floor(Math.random() * 10) + 1;

//     if (rand > 5) {
//         return function () { //Return this function
//             console.log('Congrats!:');
//             console.log('You win the jackpot')
//         }
//     } else {
//         return function () { //Return this function
//             console.log('You Lose!:')
//             console.log('Better Luck next time.')
//         }
//     }
// }

// // makeMysteryfunc() // just return a function - [doesnt capture returnvalue/'returning function'] 

// let mystery = makeMysteryfunc() //save function to a variable 
// mystery()       // capture ruturn value - 'returning function'

// =========================
// Section: Example2;

function makeBetweenFunc(min, max) {
    return function (num) {             //function doesnt have a name
        return num >= min && num <= max;
    }
}
// makeBetweenFunc(1, 17); // only passing min & max,doesnt capture return function
let child = makeBetweenFunc(1, 17); // save function as variabl's value

console.log(child(12)) //capture return function, and pass num argument

// =========================