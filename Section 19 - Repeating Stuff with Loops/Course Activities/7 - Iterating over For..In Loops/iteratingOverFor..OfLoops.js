
// Topic: Iterating over Object: For..In Loop --------------------
// =========================

const prelimGrades = {
    Aron: 95,
    Allen: 92,
    Anna: 89,
    Beatrice: 85,
    Bob: 80
}

for (let grades in prelimGrades) {
    console.log(`in prelim, ${grades} got "${prelimGrades[grades]}"`)
}
// console.log(Object.keys(prelimGrades))
// console.log(Object.values(prelimGrades))


// Activity: Find the class average grade
let classAverage = 0;
let allStudents = Object.values(prelimGrades)

for (let scores of allStudents) {

    classAverage += scores;
}
console.log(`Class Average: ${classAverage / allStudents.length}`)

// =========================
