
// Topic: MAP Method--------------------
// =========================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const square = numbers.map(function (num) { // array numbers - pass on this line to, it doesnt mutate but create a new one 
    return num * num;
})

console.log(square) // Map create new array set

// example 2: use only movie title--------------------

const movies = [
    {
        title: 'Batman, Begins',
        score: 99
    },
    {
        title: 'Joker',
        score: 95
    },
    {
        title: 'Parasite',
        score: 89
    }
]

const movieTitle = movies.map(function (movie) {
    return movie.title.toUpperCase();
})

console.log(movieTitle)



// =========================