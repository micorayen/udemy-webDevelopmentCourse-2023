
// Topic: Arrow Functions--------------------
// =========================

function square1(x) { // Arrowfunctions cant stand on its own like this, will error
    return x * x;
}

const multiply = (x, y) => { // to call this = multiply(1, 5) 
    return x * y;            //-whichbehave like any other functions,which it is, just more compact syntax
}

const rollDie = () => {      //still have empty parenthesis, even w/o args
    return Math.floor(Math.random() * 6) + 1;
}

const square2 = x => { // can do w/o parenthesis,but only if one args, not empty or two or more
    return x * x;
}

// Topic: Arrow Functions Implicit Returns--------------------
// ========================= 
// Note: only works w/ only one expression/statement in the body of function

const rollDie2 = () => (                //Change {} - w/ () and then can now remove return keyword
    Math.floor(Math.random() * 6) + 1   // gives off error w/ semi-colon(;)
)

const rollDie3 = () => Math.floor(Math.random() * 6) + 1

const square3 = x => x * x  // use one liner to much shorter one , w/ implicit returns.
const add2 = (x, y) => x + y  // use one liner to much shorter one , w/ implicit returns.

// Topic: Arrow Functions WrapUp--------------------
// ========================= 
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

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })

const newMovies = movies.map(movie => (   //arrow functions wrap-up - shorter syntax
    `${movie.title} - ${movie.score / 10}`
))

const brandNewMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`)   //probaly too long to use one-liner

console.log(brandNewMovies)

// =========================