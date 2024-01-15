//get user input & make it a constant:
const decreaseBtn = document.getElementById("btnDecrease");
const resetBtn = document.getElementById("btnReset");
const increaseBtn = document.getElementById("btnIncrease");

//constant for the label so as to track changes:
const countLabel = document.getElementById("countLabel");

//variables:
let count = 0;

//functions:
increaseBtn.onclick = function () {
  count++;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function () {
  count--;
  countLabel.textContent = count;
}

resetBtn.onclick = function () {
  count = 0;
  countLabel.textContent = count;
}