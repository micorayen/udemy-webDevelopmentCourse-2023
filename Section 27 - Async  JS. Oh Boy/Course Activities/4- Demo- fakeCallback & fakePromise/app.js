// // THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//       console.log(`${delay}`);
//     } else {
//       success(`Here is your fake data from ${url}`);
//       console.log(`${delay}`);
//     }
//   }, delay);
// };
// function fakeRequestCallback(url, success, failure) {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :(");
//       console.log(`${delay}`);
//     } else {
//       success(`Here is your fake data from ${url}`);
//       console.log(`${delay}`);
//     }
//   }, delay);
// }
// // Note: Normal is there success callback and fail callback ====================
// // Example of callback hell, - normal structure(colts 3 requests)
// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("It Worked! - ", response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("It Worked! (2nd req)- ", response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("It Worked! (3rd req)- ", response);
//           },
//           function (error) {
//             console.log("Error, It Failed!(3rd req)", error);
//           }
//         );
//       },
//       function (error) {
//         console.log("Error, It Failed!(2nd req)", error);
//       }
//     );
//   },
//   function (error) {
//     console.log("Error, It Failed!", error);
//   }
// );

// Colt's Code =====
// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")á
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })
//============================================================

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

// let res = fakeRequestPromise("haha.com");

// Note: 3 states (Pending, Resolved or Rejected) ====================
// let resquest1 = fakeRequestPromise("yelp.com/api/coffee/page1");

// resquest1
//   .then(() => {
//     console.log("Promise Resolved");
//     console.log("it Worked 1");
//   })
//   .catch(() => {
//     console.log("Promise Rejected");
//     console.log("Error");
//   });
// ================================================================================

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     console.log("Promise Resolved");
//     console.log("it Worked 1");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("Promise Resolved 2");
//         console.log("it Worked 2");
//       })
//       .catch(() => {
//         console.log("Promise Rejected 2");
//         console.log("Error 2");
//       });
//   })
//   .catch(() => {
//     console.log("Promise Rejected");
//     console.log("Error");
//   });

// Topic: The Magic of Promise ==========
fakeRequestPromise("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log("Promise Resolved 1");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log("Promise Resolved 2");
    console.log(data);
    return fakeRequestPromise("yelp.com/api/coffee/page3");
  })
  .then((data) => {
    console.log("Promise Resolved 3");
    console.log(data);
  })
  .catch((error) => {
    console.log("Promise Rejected ");
    console.log(error);
  });
// ================================================================================

// Colt's Code =====
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO, A REQUEST FAILED!!!");
//     console.log(err);
//   });
