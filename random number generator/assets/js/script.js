const btnRoll = document.getElementById("myButton");
const lblRoll1 = document.getElementById("label1");
const lblRoll2 = document.getElementById("label2");
const lblRoll3 = document.getElementById("label3");

//this random number generator will mimic rolling a 6 sided dice (now 3 times...):
const min = 1;
const max = 6;

let randomNumber1;
let randomNumber2;
let randomNumber3;

btnRoll.onclick = function() {
  randomNumber1 = Math.floor(Math.random() * max) + min;
  randomNumber2 = Math.floor(Math.random() * max) + min;
  randomNumber3 = Math.floor(Math.random() * max) + min;

  lblRoll1.textContent = randomNumber1;
  lblRoll2.textContent = randomNumber2;
  lblRoll3.textContent = randomNumber3;
}