const mole = document.querySelector(".mole");
const square = document.querySelectorAll(".square");
const timeLeft = document.querySelector("#time-left");
const button = document.querySelector("#button");
let score = document.querySelector("#score");

let timerId = null;
let countDownTimerId = null;
let result = 0;
let hitPosition;
let time = 10;

function removeMole() {
  square.forEach((square) => {
    square.classList.remove("mole");
  });
}

function randomSquare() {
  removeMole();

  let randomSquare = square[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

square.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

function timeCounter() {
  time--;

  if (time == 0 || time < 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    time = 10;
    alert("Game Over ! Your Score is " + result);
    result = 0;
    score.textContent = 0;
    removeMole();
  }
  timeLeft.textContent = time;
}

function timer() {
  countDownTimerId = setInterval(timeCounter, 1000);
}

button.addEventListener("click", (e) => {
  setInterval(moveMole(), 500);
  setInterval(timer(), 500);
  e.stopPropagation();
});

// moveMole();
