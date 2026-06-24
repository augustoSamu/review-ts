const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");

let lastPosition = 0;
let score = 0;
let time;

function startGame() {
  scoreBoard.textContent = 0;
  score = 0
  clearInterval(time)
  time = setInterval(peekBoo, 800);
}

function peekBoo() {
  const lastHole = holes[lastPosition];
  lastHole.classList.remove("up");

  const currPosition = randomPosition();
  lastPosition = currPosition;

  const currHole = holes[currPosition];
  currHole.classList.add("up");
}

function randomPosition() {
  let position = Math.floor(Math.random() * holes.length);
  while (lastPosition === position) position = randomPosition();
  return position;
}

function bonk(e) {
  this.parentNode.classList.remove("up");
  scoreBoard.textContent = ++score;
}

moles.forEach((mole) => mole.addEventListener("click", bonk));
