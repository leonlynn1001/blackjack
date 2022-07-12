const fruits = ["🍍", "🍌", "🍌", "🍍", "🍌", "🍌", "🍍", , "🍌", "🍌", "🍍"];
const pineapple = document.querySelector("#pineapple-basket");
const banana = document.querySelector("#banana-basket");
const exe = document.querySelector(".exercise.js");
function sortFruit() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "🍍") {
      pineapple.textContent += "🍍";
    } else if (fruits[i] === "🍌") {
      banana.textContent += "🍌";
    }
  }
}
sortFruit();
