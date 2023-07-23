
// Topic: Working with Arguments --------------------
// =========================



function findAvg(num1, num2, num3) {

    if (num1 === NaN || num2 === NaN || num3 === NaN) {
        return false
    }
    let avg = 0
    avg = ((num1 + num2 + num3) / 3)
    return `Result: The average of the numbers [${num1}, ${num2}, ${num3}] is "${avg}"`
}












// =========================