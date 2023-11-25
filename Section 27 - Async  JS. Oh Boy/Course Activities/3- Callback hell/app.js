// setTimeout(() => {
//   document.body.style.backgroundColor = "blue";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "green";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "black";
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

function delayedColorChange(color, delay, doNext) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    doNext && doNext();
  }, delay);
}

delayedColorChange("red", 1000, () => {
  delayedColorChange("green", 1000, () => {
    delayedColorChange("blue", 1000, () => {
      delayedColorChange("black", 1000, () => {});
    });
  });
});

// IE====================

// Common structure - colt's - need to anticipate two diff outcomes, but wont know until it happens
searchMoviesAPI(
  "amadeus",
  () => {
    saveToMyDB(
      movies,
      () => {
        // if it works, run this:
      },
      () => {
        // if it doesn't works, run this:
      }
    );
  },
  () => {
    //if APU is down, or request failed
  }
);

// too many callbacks result in JavaScript Dev's callback hell,
// - where you end up passing bunch of callbacks
// - when code gets very nested, just crazy and ugly and confusing
