
// Topic: New Loop: For..Of Loop --------------------
// =========================

// const randomNames = ['Mico', 'Marco', 'Rezy', 'NF', 'John',]

// for (let num = 0; num < randomNames.length; num++) {
//     console.log(`Visit randomName.com/rn/${randomNames[num]}`)
// }
// console.log('------------------------------')

// for (let numOfIndex of randomNames) {
//     console.log(numOfIndex)
// }

// Activity: Recreated seatingChart
const seatingChart = [
    ['Aron', 'Allen', 'Anna'],
    ['Beatrice', 'Bob', 'Bea'],
    ['Caselyn', 'Catlyn', 'Carol']

]

// for (let num = 0; num < seatingChart.length; num++) {
//     const row = seatingChart[num];
//     console.log(`Row #${num + 1}:`)

//     for (let num2 = 0; num2 < row.length; num2++) {
//         console.log(`    ${row[num2]}`)
//     }
// }

// =========================use for..of loop to be More Readable
let rowNum = 0;

for (let row of seatingChart) {
    console.log(`Row #${rowNum + 1}`)

    for (let ticketHolder of row) {
        console.log(`    ${ticketHolder}`)
    }
}

for (let char of 'Mico-Rayen') {
    console.log(char)
}
// =========================
