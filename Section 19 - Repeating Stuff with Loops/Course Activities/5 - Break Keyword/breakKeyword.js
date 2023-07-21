
// Topic: The Break Keyword --------------------
// =========================

// Activity: Copy, what you say
let input = prompt('Hey, say Something')
while (true) {
    input = prompt(input)
    if (input.toLowerCase() === 'stop copying me') {
        break
    }
}
console.log("OK, i'll will stop ")



// for (let num = 1; num <= 100; num++) {
//     console.log(num)
//     if (num === 50) break;
// }

// =========================
