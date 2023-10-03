
// Topic: Destruvturing Arrays--------------------
// =========================
// const grades = [98, 92, 89, 82, 80, 75]

// const highestGrade = grades[0]
// const lowestGrade = grades[5]

// const [firstGrade, secondGrade, thirdGrade] = grades;
// Example: Destructuring Arrays=========================
const raceCandidates = ['Usain Bolt', 'Eliud kipchoge', 'Feyisa Lelisa', 'Galen Rupp']

const [gold, silver, bronze] = raceCandidates;

const [fastest, ...everyoneElse] = raceCandidates;

// =========================