const ul = document.querySelector("#list");
const txt1 = document.querySelector("#txt-1");
const btn1 = document.querySelector("#btn-1");

btn1.addEventListener("click", () => {
  const newLi = document.createElement("li");
  newLi.innerText = txt1.value;
  ul.append(newLi);
});

//============================
const lis = document.querySelectorAll("li");
// for (let li of lis) {
//   li.addEventListener("click", () => { // wont trigged newly add LI, after this run(Event Delegate on parent(UL))
//     li.remove();
//   });
// }

ul.addEventListener("click", (evt) => {
  console.dir(evt.target);
  // evt.target.remove();
  evt.target.nodeName === "LI" && evt.target.remove();
});
