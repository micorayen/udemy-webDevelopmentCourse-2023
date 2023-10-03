
// Topic: Destruvturing Arrays--------------------
// =========================
// Example: Destructuring Arrays=========================
const raceCandidates = ['Usain Bolt', 'Eliud kipchoge', 'Feyisa Lelisa', 'Galen Rupp']

const [gold, silver, bronze] = raceCandidates;
const [fastest, ...everyoneElse] = raceCandidates;

// Example: Destructuring Objects=========================
const user = {
    email: 'micorayenaniga"gmail.com',
    password: 'iAmGroot',
    firstName: 'Mico',
    lastName: 'Rayen',
    born: 19998,
    died: 2090,
    bio: 'A Beloved Son, Brother, Father, and A Man of God',
    city: 'Norzagaray, Bulacan'
}

const user2 = {
    email: 'haha@gmail.com',
    firstName: 'Haroro',
    lastName: 'Haha',
    born: 1964,
    country: 'Korea'
}

const { password, bio } = user; // betterin Destructuring, since it can be un-order
const { bio: lifeWorks, born: birthDate, lastName: familyName, died = 'long time, still' } = user; // use different Key-name

const { city, password2, died2 = 'Not yet, soon!' } = user2; // can Add default value
// like: const silly - user2.silly;
const { email: hEmail = 'hoho@g.com' } = user2; // won't work, conflict of key-name

// Example: Destructuring Params=========================
const johnWickMovies = [
    { Title: 'John Wick', score: 82, year: 2014 },
    { Title: 'John Wick, Chapter 2', score: 85, year: 2017 },
    { Title: 'John Wick, Chapter 3 - Parabellum', score: 90, year: 2019 },
    { Title: 'John Wick, Chapter 4', score: 98, year: 2023 }
]

function fullName({ firstName, lastName = 'Apelyido' }) { // Destructure Objects, using function, w/default value for 'lastName'
    return `${firstName}, ${lastName}`
}

const filterScore = johnWickMovies.filter((movie) => movie.score >= 90) // without Destructuring
const filterScore2 = johnWickMovies.filter(({ score }) => score <= 90) // with Destructuring
// much useful on longer functions parameters

const mapScore = johnWickMovies.map(movie => { // without Destructuring
    return `${movie.Title} (${movie.year}) is rated ${movie.score}`
})


const mapScore2 = johnWickMovies.map(({ Title, year, score }) => { // with Destructuring
    return `${Title} (${year}) is rated ${score}` // dont have to reference movie, no need to extract things yourseld, done on the way.
})
// =========================