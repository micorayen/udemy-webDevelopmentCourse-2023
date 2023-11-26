// Topic: Setting Headers w/ Axios ============================

// const jokes = document.querySelector("#jokes");
// const btn1 = document.querySelector("button");

// const getRandomJoke = async () => {
//   try {
//     // Add Header, that the API require (Header: Accept | content-type: JSON)
//     const config = { headers: { Accept: "application/json" } };

//     const res = await axios.get(`https://icanhazdadjoke.com/`, config); // pass config as 2nd argument
//     // console.log("Response", res);
//     // console.log("Response", res.data);
//     console.log("Response", res.data.joke); // .joke - is property of data-obj
//     // console.log("Response", res.data.status); // .status - is property of data-obj

//     return res.data.joke;
//   } catch (error) {
//     return `No Jokes Available!, Sorry :(, [ ${error} ]`;
//   }
// };

// // make as Async so you can await it, since prior function works as Promise-pending-status
// const addNewJoke = async () => {
//   // fucntion to add new joke as LI
//   const jokeText = await getRandomJoke();
//   const newLI = document.createElement("li"); // create LI element
//   newLI.append(jokeText); // put newly-created LI - to newLI
//   jokes.append(newLI); // put created newLI - to UL
// };

// btn1.addEventListener("click", addNewJoke);

// Project: TV Show Search APP ============================
const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  //- Extract value in TextBox
  const searchTerm = form.elements.query.value;
  //- Request to Api
  // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`); // this is okay but can be better

  // this is more flexible,you can also add headers in here, & multiple params
  // const config = { params: { q: searchTerm, isAiring: "Still Airing" } };
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);

  // // Add Img to body
  // const img = document.createElement("img");
  // img.src = res.data[0].show.image.medium;
  // document.body.append(img);
  makeImages(res.data);
  form.elements.query.value = ""; //- Empty txtbox after search
});

const makeImages = (shows) => {
  //  Use For-of loop to cater the array("res.data")
  for (let result of shows) {
    // to prevent error on null images, use if- to ignore it.
    if (result.show.image) {
      // Add Img to body
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
