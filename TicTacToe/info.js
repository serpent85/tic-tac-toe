const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const cellElement = document.querySelectorAll("[data-cell]");
const player = document.querySelector(".player");
const winMes = document.querySelector(".winning-message");
const board = document.getElementById("board");
const reset = document.querySelector(".restart");
const reset2 = document.querySelector(".restart2");
reset2.addEventListener("click", () => {
  window.location.reload();
});
let number = 4;
const winCombi = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
console.log(cellElement);
let circleTurn;
startGame();
function startGame() {
  circleTurn = false;
  cellElement.forEach((cell) => {
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
}

function handleClick(e) {
  const cell = e.target;
  console.log(number);
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    if (circleTurn) {
      winMes.style.display = "flex";
      player.innerHTML = "O";
    }
    if (!circleTurn) {
      winMes.style.display = "flex";
      player.innerHTML = "X";
    }
  } else if ((number = 9)) {
    console.log("ss");
  }

  swapTurns();
  setBoardHoverClass();
}
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}
function swapTurns() {
  circleTurn = !circleTurn;
}
function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}
function checkWin(currentClass) {
  return winCombi.some((combination) => {
    return combination.every((index) => {
      return cellElement[index].classList.contains(currentClass);
    });
  });
}
reset.addEventListener("click", () => {
  window.location.reload();
});
