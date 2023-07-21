
// Topic: Writing a Guessing Game --------------------
// =========================

let maximum = parseInt(prompt('Enter the maximum number'))

while (!maximum) { //Check if False-y, cause NAN is a false-y
    maximum = parseInt(prompt('Enter a valid number'))
}

const targetNum = Math.floor(Math.random() * maximum) + 1 //create random number <= your maximum number
// console.log(targetNum)

let guess = parseInt(prompt('Enter your first Guess!'))
let attempts = 1

while (parseInt(guess) !== targetNum) {
    attempts++;
    if (guess == 'q') break; //quit the guessing game

    if (guess > targetNum) {
        guess = prompt('Too high!, Enter a new guess')
    } else {
        guess = prompt('Too low!, Enter a new guess')
    }
}

if (guess == 'q') {
    console.log('Ok!, You Quit.') //quit the guessing game
} else {
    console.log(`You got it! it is indeed "${guess}",it took you ${attempts} guesses`)
}
// =========================
