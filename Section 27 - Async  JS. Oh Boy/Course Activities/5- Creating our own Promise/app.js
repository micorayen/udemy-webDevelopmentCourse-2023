// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     setTimeout(() => {
//       if (random <= 0.5) {
//         resolve(random);
//       }
//       reject(random);
//     }, 2000);
//   });
// };

// fakeRequest("dogs/1")
//   .then((data) => {
//     console.log(`Success- ${data}`);
//   })
//   .catch((error) => {
//     console.log(`Fail- ${error}`);
//   });
//===============================

// function delayedColorChange(color, delay, doNext) {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext && doNext();
//   }, delay);
// }

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("green", 1000, () => {
//     delayedColorChange("blue", 1000, () => {
//       delayedColorChange("black", 1000, () => {});
//     });
//   });
// });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (random < 6) {
        document.body.style.backgroundColor = color;
        resolve("Resolved");
      } else {
        document.body.style.backgroundColor = color;
        reject("Rejected");
      }
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .catch(() => delayedColorChange("black", 1000));

//   delayedColorChange("purple", 1000);
// })
// .then(() => {
//   delayedColorChange("black", 1000);
// });
// function delayedColorChange(color, delay, doNext) {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext && doNext();
//   }, delay);
// }

// delayedColorChange("red", 1000, () => {
//   delayedColorChange("green", 1000, () => {
//     delayedColorChange("blue", 1000, () => {
//       delayedColorChange("black", 1000, () => {});
//     });
//   });
// });
