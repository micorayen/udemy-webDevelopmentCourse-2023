// Topic: Making XHRs ==================================

// let req = new XMLHttpRequest();

// // Missing two event handler Callbacks
// req.onload = function () {
//   // this will run when theres no Error
//   console.log("It Loaded!");
//   const data = JSON.parse(this.responseText);
//   console.log(data);
//   console.log(data.name, data.height);
// };
// req.onerror = function () {
//   // this will run when theres Error
//   console.log("Error!");
//   console.log(this);
// };

// req.open("GET", "https://swapi.dev/api/people/1"); // 1- Open Request
// req.send(); // 2- Send Request

//"https://swapi.dev/api/people/1";

// Topic: Practice Using a Fetch API ==================================

// Note: this in series means 1st req must be resolved or 2nd req wont even start
// but this can be done seperatedly, since theres 2 URLs
// fetch("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("1st Request Resolved!", res);
//     // json is fetch object's method // the problem w/ res.json(), is that alaso return a promise(use then)
//     // res.json().then((data) => console.log("JSON DONE", data)); // return this, create other .then.
//     return res.json(); // 1st req: incomplete, res.json() - "body: Readable Stream"
//   })
//   .then((data) => {
//     console.log("1st Request Printout", data); // printout 1st req's data
//     return fetch("https://swapi.dev/api/people/2"); // 2nd fetch req
//   })
//   .then((res) => {
//     console.log("2nd Request Resolved");
//     return res.json(); // 2nd req: incomplete, res.json() - "body: Readable Stream"
//   })
//   .then((data) => {
//     console.log("2nd Request Printout", data); // printout 2nd req's data
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

// Refactor- Using Async Functions ============================

// // Note: So much cleaner that Promises
// const loadStarWarsCharacters = async (url) => {
//   // const response = await fetch("https://swapi.dev/api/people/1");
//   const response = await fetch(url);
//   const data = await response.json();
//   console.log(data);
// };

// const loadStarWarsPeople = async () => {
//   try {
//     const response = await fetch("https://swapi.dev/api/people/1");
//     const data = await response.json();
//     console.log(data);
//     const response2 = await fetch("https://swapi.dev/api/peoplae/2");
//     const data2 = await response2.json();
//     console.log(data2);
//   } catch (e) {
//     console.log("Error:", e);
//   }
// };

// Topic: Introducing Axios ============================
// axios
//   .get("https://swapi.dev/api/people/1")
//   .then((res) => {
//     console.log("Response:", res);
//     console.log("Data Request Response:", res.data);
//   })
//   .catch((e) => {
//     console.log("Error:", e);
//   });

// Refactor: to be Async Functions
const getStarWarsPerson = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    console.log("Response", res.data);
  } catch (e) {
    console.log("Error:", e);
  }
};
// getStarWarsPerson(10);

// Topic: Setting Headers w/ Axios ============================

const jokes = document.querySelector("#jokes");
const btn1 = document.querySelector("button");

const getRandomJoke = async () => {
  try {
    // Add Header, that the API require (Header: Accept | content-type: JSON)
    const config = { headers: { Accept: "application/json" } };

    const res = await axios.get(`https://icanhazdadjoke.com/`, config); // pass config as 2nd argument
    // console.log("Response", res);
    // console.log("Response", res.data);
    console.log("Response", res.data.joke); // .joke - is property of data-obj
    // console.log("Response", res.data.status); // .status - is property of data-obj

    return res.data.joke;
  } catch (error) {
    return `No Jokes Available!, Sorry :(, [ ${error} ]`;
  }
};

// make as Async so you can await it, since prior function works as Promise-pending-status
const addNewJoke = async () => {
  // fucntion to add new joke as LI
  const jokeText = await getRandomJoke();
  const newLI = document.createElement("li"); // create LI element
  newLI.append(jokeText); // put newly-created LI - to newLI
  jokes.append(newLI); // put created newLI - to UL
};

btn1.addEventListener("click", addNewJoke);
