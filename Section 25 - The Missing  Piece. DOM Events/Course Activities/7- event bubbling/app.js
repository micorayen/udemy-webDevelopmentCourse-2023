const btn1 = document.querySelector("#btn-1");
const h2 = document.querySelector(".h2");
const p1 = document.querySelector("#paragraph-1");

const div1 = document.querySelector(".div-1");
const btn2 = document.querySelector("#btn-2");

h2.addEventListener("click", () => {
  console.log("h2 clicked");
});

p1.addEventListener("click", () => {
  console.log("p1 clicked");
});

btn1.addEventListener("click", () => {
  console.log("bnt clicked");
});

// =================================================
const createRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

div1.addEventListener("click", () => {
  div1.classList.toggle("hide");
});

btn2.addEventListener("click", (evt) => {
  div1.style.backgroundColor = createRandomColor();
  div1.style.color = createRandomColor();
  evt.stopPropagation();
});
