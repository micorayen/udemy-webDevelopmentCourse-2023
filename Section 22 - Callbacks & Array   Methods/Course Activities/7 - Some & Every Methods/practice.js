
// Topic: Some & Every Methods--------------------
// =========================
// Example 1: Some Methods---------------
const animals = ['dog', 'cat', 'bird', 'horse']

// Are there any animal words, longer than 4 characters
const checkWords = animals.some(animal => {
    return animal.length > 4;
}) // true

const checkWords2 = animals.some(animal => animal[0] === 'e') // false

const checkWords3 = animals.some(animal => animal.includes('horse')) // true

const checkWords4 = animals.every(animal => animal.includes('horse')) // False

console.log(checkWords3)
console.log(checkWords4)

// Example 2: Every Methods---------------
console.log('// Every Method:=========================')

const grades = [
    { name: 'mico', grade: 89 },
    { name: 'john', grade: 92 },
    { name: 'marco', grade: 74 }
]


const isGradePassable = grades.every(studentGrade => studentGrade.grade > 75) //does every student passed?
const isGradePassable2 = grades.some(studentGrade => studentGrade.grade > 75) //does some student passed?

console.log(isGradePassable) // false, use Every Method
console.log(isGradePassable2) // true, use Some Method

// Practice Callback Function---------------
function sayName(names) {
    return names;
}

function sendMsg(msg, callback) {

    return `${msg}, ${callback}`;

}


console.log(sendMsg('HBD!', sayName('Mico Rayen')))

// =========================