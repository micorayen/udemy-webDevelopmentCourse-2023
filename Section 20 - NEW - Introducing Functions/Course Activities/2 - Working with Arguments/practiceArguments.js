
// Topic: Working with Arguments --------------------
// =========================

// Topic: Arguments intro --------------------
function greet1(firstName) {
    console.log(`Hi!, ${firstName}`)
}

// Topic: Functions w/ Multiple Arguments --------------------
function greet(firstName, lastName) {
    console.log(`Hi!, ${firstName} ${lastName}`)
}

function repeatMsg(msg, numTimes) {
    let result = ''

    for (let i = 1; i <= numTimes; i++) {
        result += msg;
    }

    console.log(`Message: ${result}`)
}









// =========================