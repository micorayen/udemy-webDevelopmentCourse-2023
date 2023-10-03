
// Topic: Default Parameters--------------------
// =========================

function rollDie(numSides) {
    if (numSides === undefined) { //Old Declaration of "Default Parameters"
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1
}

function rollDie2(numSides = 6) {  // New Declaration of "Default Parameters"
    return Math.floor(Math.random() * numSides) + 1
}

// Example=========================

function greet(msg = 'Hey, there', personName) {
    console.log(`${msg}, ${personName} `)
}


function greet2(personName, msg = 'Hey, there') {
    console.log(`${msg}, ${personName} `)
}
// =========================