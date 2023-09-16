
// Topic: higher order Functions--------------------
// =========================


function rollTwice(roll) { //Run rollDie Twice
    roll();
    roll();
}

function rollDie() { //use other function to run this, pass as argument
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);

}

// rollTwice(rollDie())  //Do not do this 'parenthesis()' executes functions
rollTwice(rollDie)      //  Do this instead, since rollDie not execute here, it'll run in callTwice() 



// =========================