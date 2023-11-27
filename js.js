"use strict";

const boxWinner = document.querySelector(".box-winner");
const boxNumber = document.querySelector(".box-try");
const checkScore = document.querySelector(".check");
const start = document.querySelector(".start");
const scoreTry = document.querySelector(".list-number");
const scoreMax = document.querySelector(".max-number");
const body = document.querySelector("body");
const restart = document.querySelector(".reset");

checkScore.addEventListener("click", func);
scoreTry.innerHTML = 20;
scoreMax.innerHTML = 0;
let random = Math.trunc(Math.random() * 20) + 1;
console.log(random);
function func() {
  if (boxNumber.value == random) {
    boxWinner.innerHTML = boxNumber.value;
    start.innerHTML = "🏆 You are winner";
    if (scoreTry.innerHTML > scoreMax.innerHTML) {
      scoreMax.innerHTML = scoreTry.innerHTML;
    }
    body.style.backgroundColor = "#8854d0";
    boxNumber.style.backgroundColor = "#009432";
  } else if (boxNumber.value > random) {
    start.innerHTML = "👆🏻 It's a little high";
    if (scoreTry.innerHTML == 1) {
      start.innerHTML = "🥸 You lose";
      boxWinner.innerHTML = random;
      checkScore.removeEventListener("click", func);
    }
    scoreTry.innerHTML--;
  } else if (boxNumber.value < random) {
    start.innerHTML = "👇🏻 It's a little low ";
    if (scoreTry.innerHTML == 1) {
      start.innerHTML = "🥸 You lose";
      boxWinner.innerHTML = random;
      checkScore.removeEventListener("click", func);
    }
    scoreTry.innerHTML--;
  }
}
restart.addEventListener("click", rest);
function rest() {
  random = Math.trunc(Math.random() * 20) + 1;
  console.log(random);
  scoreTry.innerHTML = 20;
  start.innerHTML = "🤔 Start guessing...";
  boxNumber.value = "";
  boxWinner.innerHTML = "?";
  checkScore.addEventListener("click", func);

  body.style.backgroundColor = "#353b48";
  boxNumber.style.backgroundColor = "#353b48";
}
