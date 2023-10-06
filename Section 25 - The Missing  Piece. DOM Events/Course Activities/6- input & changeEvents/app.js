const txt1 = document.querySelector("#txt-1");
const comments = document.querySelector("#comment");
// txt1.addEventListener("change", (e) => { // trigger when you blur from txt1
//   console.log(txt1.value);
// });

txt1.addEventListener("input", (e) => {
  // trigger when whats inside 'txt1' changes, doesnt get fire (arrowKeys& shift)
  comments.innerText = txt1.value;
});
