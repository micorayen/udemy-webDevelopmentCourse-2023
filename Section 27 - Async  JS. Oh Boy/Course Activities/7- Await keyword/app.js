// async function hello() {}

// const req1 = async () => {
//   // Promise Resolved
//   return "The Value";
// };

// req1().then((data) => {
//   console.log(`Promised Resolved - ${data}`);
// });

// const req2 = async () => {
//   // Promise Rejected - if it throw an 'error'
//   throw new Error("Nooo!!");
//   return "The Value Returns2";
// };

// req2()
//   .then((data) => {
//     console.log(`Promised Resolved - ${data}`);
//   })
//   .catch((err) => {
//     console.log(`Promised Rejected - ${err}`);
//     console.log(err);
//   });

//============================================

// const login = async (username, password) => {
//   if (!username || !password) throw "Invalid Credentials";
//   if (password === "thisPassword") return "Welcome, User!";
//   throw "Invalid Password";
// };

// login("uname1", "thisPassword")
//   .then((msg) => {
//     console.log("Logged In");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("Login Failed");
//     console.log(err);
//   });
//=====================================

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("blue", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "All Done";
}

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

// rainbow().then((data) => console.log("Done Demonstating Rainbow - ", data));
async function demoRainbow() {
  await rainbow();
  console.log("Done Demonstating Rainbow");
}
demoRainbow();

//=================================================
// THE PROMISE VERSION
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 3000) {
        reject("Connection Timeout :(");
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

async function makeRequest1() {
  let data1 = await fakeRequestPromise("/page-1");
  console.log(data1);
}
