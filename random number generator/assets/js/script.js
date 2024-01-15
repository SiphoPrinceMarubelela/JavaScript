const btnRoll = document.getElementById("myButton");
const lblRoll = document.getElementById("myLabel");

//this random number generator will mimic rolling a 6 sided dice:
const min = 1;
const max = 6;

let randomNumber;

btnRoll.onclick = function() {
  randomNumber = Math.floor(Math.random() * max) + min;
  lblRoll.textContent = randomNumber;
}