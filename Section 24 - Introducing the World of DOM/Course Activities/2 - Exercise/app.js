// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png

const container = document.querySelector("#container");

const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i < 101; i++) {
  const pokemon = document.createElement("div"); // create new 'div' element
  const label = document.createElement("span"); // create new 'span' elements
  label.innerText = `#${i}`; // add text on labels

  const newImg = document.createElement("img"); // create new img elements
  newImg.src = `${baseURL}${i}.png`; // add img sources
  container.appendChild(newImg); // insert/display images section w/ id container

  pokemon.appendChild(newImg); // display inside div
  pokemon.appendChild(label);
  container.appendChild(pokemon); // display inside section w/ id container

  pokemon.classList.add("pokemon"); //Add class 'pokemon' for css-format
}
