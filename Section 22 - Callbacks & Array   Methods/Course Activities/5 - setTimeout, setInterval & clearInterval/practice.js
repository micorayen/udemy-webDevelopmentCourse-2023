
// Topic:  setTimeout & setInterval--------------------
// =========================

// sleep(5000) or pause - //in some language there sleep/pause function to stop the execution

// console.log('Hello')
// setTimeout(() => {
//     console.log('Hello!')
// }, 3000)                    //After the 3 secs, it will execute functions
// console.log('Goodbye')      //Will run first

// Example 2: Set Interval - Not as commonly used

const ID = setInterval(() => {
    console.log(Math.floor(Math.random() * 6) + 1)
}, 2000); // function will keep running over, with interval, 2 secs


setTimeout(() => {                  //Run after set Time
    console.log('Stop Interval')
    clearInterval(ID)               //Stop setInterval named ID
}, 10000)

//





// =========================