console.log("Sending Request to Server"); // 1- This Runs
setTimeout(() => {
  // 2- Runs kind of
  console.log("Result");
}, 3000); // 4- run after 3 seconds
console.log("Run simultaneously"); // 3- life moves on - run this

// Js runs - 1st line
// Js run - 2nd line - recognize setTimeot - pass it to browser to run
// Js goes on - runs 3rd line
// Browser done with it task (3 sec) - JS Takes Over
// Js executes - 2nd line
