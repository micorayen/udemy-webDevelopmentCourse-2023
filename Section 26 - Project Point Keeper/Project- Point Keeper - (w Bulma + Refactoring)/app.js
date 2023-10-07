// Refactor - Notes ====================
// - find possible almost similar code (in this case - EL for player 1 & 2)
// - create a function - but problem is just cant direct passed parameters
// - a solution: is create object-literal for player 1 & 2 (inside is score, display & buttons)
// - now, write a function that replicates, what happen when you click a button (w/ parameter 'player & opponent')
// - inside button events - pass parameter 'updateScore(pa, p2) and vice-versa'
// - do not forget to change - button's name with the event listener
// - update reset function
// - u can better refactor the reset function by using a for-of-loop

//  possible additionals
// - fireworks animation when somebody win
// - in real pingpong - case there that score keep gets up past 11 -must have two pts ahead - to win
// - can have best of 3 or 5, have a tally, keep track of multiple games

// newly created cause refactoring
const p1 = {
  score: 0,
  button: document.querySelector("#btnPlayer-1"),
  display: document.querySelector("#p1Display"),
};

// newly created cause refactoring
const p2 = {
  score: 0,
  button: document.querySelector("#btnPlayer-2"),
  display: document.querySelector("#p2Display"),
};

const selectWinningScore = document.querySelector("#selectWinningScore-1");
const btnReset = document.querySelector("#btnReset");
let winningScore = 5;
let isGameOver = false;

// newly created cause refactoring
function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    player.display.textContent = player.score;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
  }
}

// Refactor
p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

// Refactor
p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

selectWinningScore.addEventListener("change", function () {
  reset();
  winningScore = parseInt(selectWinningScore.value);
});

btnReset.addEventListener("click", reset);

// Refactor
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
