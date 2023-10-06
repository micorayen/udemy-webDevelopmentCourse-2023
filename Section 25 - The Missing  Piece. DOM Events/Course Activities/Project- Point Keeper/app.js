const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const selectWinningScore = document.querySelector("#selectWinningScore-1");
const btnPlayer1 = document.querySelector("#btnPlayer-1");
const btnPlayer2 = document.querySelector("#btnPlayer-2");
const btnReset = document.querySelector("#btnReset");

let winningScore = 5;
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

selectWinningScore.addEventListener("change", function () {
  reset();
  winningScore = parseInt(selectWinningScore.value);
});

btnPlayer1.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
  }
});

btnPlayer2.addEventListener("click", () => {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
  }
});

btnReset.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
}
