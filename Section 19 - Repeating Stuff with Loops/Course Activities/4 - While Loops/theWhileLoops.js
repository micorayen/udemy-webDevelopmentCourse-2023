
// Topic: Another Loop: The While Loop --------------------
// =========================

// let num = 0;
// while (num < 10) {
//     num++;
//     console.log(num);
// }

// for (let num2 = 0; num2 < 10; num2++) {
//     console.log(num2);
// }

// Activity: Common used for while loops: Guess Secret Code
const SECRET = 'NoSecretCode'

let guess = prompt('Enter the secret code...')

while (guess !== SECRET) {
    guess = prompt('Enter the secret code...')
}
console.log('Congrats!, You Guess it right')

// =========================
