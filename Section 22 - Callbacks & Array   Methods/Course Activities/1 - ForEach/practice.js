
// Topic: ForEach Method--------------------
// =========================
// const nums = [5, 4, 3, 2, 1]

// function printOut(input) {
//     console.log(input)
// }

// nums.forEach(printOut)

// nums.forEach(function (el) { //create function just for its purpose
//     if (el % 2 === 0) {  //normal use of forEach youll see, foreach is used for longtime.
//         console.log(el)
//     }

//     //console.log(el)
// })

// console.log('===============')

// for (let el of nums) { //For..Of is much readable
//     console.log(el)
// }

// example 2: --------------------

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

movies.forEach(function (movie) {
    console.log(movie)


    console.log(`${movie.title} - ${movie.score}/100`)
})


// =========================