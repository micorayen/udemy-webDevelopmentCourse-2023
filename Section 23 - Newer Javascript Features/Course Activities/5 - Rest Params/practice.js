
// Topic: Rest Params--------------------
// =========================
function sumAll1() {
    console.log(arguments) // acts kinda like array, but not array nothave its method.
}

function sumAll2() {
    return arguments.filter((total, el) => total + el) // acts kinda like array, but not array nothave its method.
}

function sumAll3(...nums) { // just one arguments, but (...) will make it an array
    // return nums.reduce((total, el) => total + el)
    return nums.filter((num1) => num1 % 2 === 0)
}

function raceResult(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes ${gold}`)
    console.log(`Silver medal goes ${silver}`)
    console.log(`and thanks to everyone else, ${everyoneElse}`)
}


// =========================