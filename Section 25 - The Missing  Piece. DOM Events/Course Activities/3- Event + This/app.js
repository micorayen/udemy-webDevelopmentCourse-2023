const buttons = document.querySelectorAll("button");
const h1s = document.querySelectorAll("h1");

const createRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

// Not using 'This'====================
for (let button of buttons) {
  button.addEventListener("click", () => {
    button.style.backgroundColor = createRandomColor();
    button.style.color = createRandomColor();
  });
}
// Using 'This'====================
for (let h1 of h1s) {
  h1.addEventListener("click", colorize); // still fuctioning - just calling colorize()
}

function colorize() {
  //use 'This', to have access to 'button' even thou generic-func
  this.style.backgroundColor = createRandomColor();
  this.style.color = createRandomColor();
}
