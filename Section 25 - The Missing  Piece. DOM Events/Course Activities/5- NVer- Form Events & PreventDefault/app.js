const form1 = document.querySelector("#form-1");
const input = document.querySelector("#petName");
const list = document.querySelector("#list");
form1.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent default behavior (most common)
  console.log(input.value);
  const petName = input.value;
  const newLI = document.createElement("li");
  newLI.innerText = petName;
  list.append(newLI);
  input.value = "";
});
