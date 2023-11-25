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

const login = async (username, password) => {
  if (!username || !password) throw "Invalid Credentials";
  if (password === "thisPassword") return "Welcome, User!";
  throw "Invalid Password";
};

login("uname1", "thisPassword")
  .then((msg) => {
    console.log("Logged In");
    console.log(msg);
  })
  .catch((err) => {
    console.log("Login Failed");
    console.log(err);
  });
