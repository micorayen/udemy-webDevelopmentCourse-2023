
// Topic: Nested Loops --------------------
// =========================

// for (let num1 = 1; num1 <= 3; num1++) {
//     console.log(`num1 is:${num1}`);
//     for (let num2 = 1; num2 <= 2; num2++) { //Inner Loops
//         console.log(`   num2 is:${num2}`);

//     }
// }

// Activity: Print Out seating Arrangements

const seatingChart = [
    ['Aron', 'Allen', 'Anna'],
    ['Beatrice', 'Bob', 'Bea'],
    ['Caselyn', 'Catlyn', 'Carol']

]

for (let num = 0; num < seatingChart.length; num++) {
    const row = seatingChart[num];
    console.log(`Row #${num + 1}:`)

    for (let num2 = 0; num2 < row.length; num2++) {
        console.log(`    ${row[num2]}`)
    }
}

// seatingChart[num][num2] //equals seatingChart[0][0-2]
// seatingChart[num][num2] //equals seatingChart[1][0-2]
// seatingChart[num][num2] //equals seatingChart[2][0-2]

// =========================








































// let str = 'RAYEN'

// let num = str.length - 2
// // console.log(str.slice(num))

// num
// console.log(str.indexOf('N'))


// for (let num = str.length - 1; num >= 0; num--) {
//     // if (num = str.length - 1) {
//     console.log(str.slice(num, num))
//     // } else {
//     //     console.log(str.slice(num, num++))
//     // }

// }

