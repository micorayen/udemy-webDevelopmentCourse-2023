const btnRandomColor = document.querySelector("#btn-1");
const result = document.querySelector("#color");

btnRandomColor.addEventListener("click", () => {
  const newColor = createRandomColor();

  document.body.style.backgroundColor = newColor;
  result.innerText = `Result: ${newColor}`;
});

const createRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};
