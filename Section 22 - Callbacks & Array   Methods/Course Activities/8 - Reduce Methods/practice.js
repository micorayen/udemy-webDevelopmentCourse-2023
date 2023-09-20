
// Topic: The Notorious Reduce Methods--------------------
// =========================
// Example 1: Reduce Methods---------------

const prices = [9.99, 14.99, 19.99, 24.99]

// let total = 0
// for (let price of prices) {
//     total += price;
//     console.log(total)
// }

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)
const product = prices.reduce((total, price) => total * price)
console.log(total)
console.log(Math.floor(product))

// Example 2: find smallest numbers=========================
const numbers = [100, 79, 92, 24, 64, 78]

const isSmallestNum = numbers.reduce((min, num) => {
    if (num < min) {
        return num;
    }
    return min;
})

console.log(isSmallestNum)

// Example 3: find highest grade=========================
const grades = [
    { name: 'mico', grade: 89 },
    { name: 'john', grade: 92 },
    { name: 'marco', grade: 74 }
]

const isHighestGrade = grades.reduce((bestGrade, currGrade) => {
    if (currGrade.grade > bestGrade.grade) {
        return bestGrade;
    }
    return currGrade;
})
console.log(isHighestGrade)

// Example 4: sum of all even numbers=========================
const evens = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sumOfEvens = evens.reduce((sum, currNumber) => {
    if (!(sum % 2 === 0)) {
        return currNumber;
    }
    if (currNumber % 2 === 0) {
        return sum + currNumber;
    }
    return sum;
})

console.log(sumOfEvens)

// Example 4: Try reduce second argument=========================
const evens2 = [2, 4, 6, 8,]

const secondArgs = evens2.reduce((sum, num) => sum + num, 30)

console.log(secondArgs)

// =========================