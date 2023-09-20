
// Topic:  The Filter Method--------------------
// =========================
// Example 1: ---------------
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const oddNums = numbers.filter(n => {
    return n % 2 === 1; //our callback returns true or false // must meet conditions to return a value
    // if it returns true, n is added to the filtered array
})  // didn't changed numbers array, just "filter" it w/ conditions, (array's numbers still remain the same)

console.log(`Result: ${oddNums}`)    // result: [1, 3, 5, 7, 9]

const smallNums = numbers.filter(n => n < 5);
console.log(`Result: ${smallNums}`)  // result: [1, 2, 3, 4]

// Example 2: ---------------
const moviesQuadrilogy = [
    {
        title: 'John Wick', score: 82, year: 2014
    },
    {
        title: 'John Wick Chapter 2', score: 87, year: 2017
    },
    {
        title: 'John Wick Chapter 3 - Parabellum', score: 92, year: 2019
    },
    {
        title: 'John Wick  Chapter 4,', score: 97, year: 2023
    }
]

const greatMovies = moviesQuadrilogy.filter(movie => {
    return movie.score > 90;
})

const goodMovies = moviesQuadrilogy.filter(movie => movie.score < 90) // one liner

const recentMovies = moviesQuadrilogy.filter(movie => movie.year > 2020) // one liner

console.log(goodMovies + `& ${goodMovies[0]}, are good movies`)
// =========================

const goodTitle = recentMovies.map(movie => movie.title) //Map to get movies title
console.log(goodTitle)

const gMovie = moviesQuadrilogy.filter(m => m.year >= 2019).map(m => m.title) //filter (recent years) and then map (get title)
console.log(gMovie)

// ========================= Indent it
const gMovie2 =
    moviesQuadrilogy
        .filter(m => m.year >= 2019)
        .map(m => m.title) //filter (recent years) and then map (get title)

// =========================