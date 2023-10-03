
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

// =========================