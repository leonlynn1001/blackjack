const fruits = ['🍍', '🍌', '🍌', '🍍', '🍌', '🍌', '🍍', '🍌', '🍌', '🍍'];
const pineappleBasket = document.querySelector('#pineapple-basket');
const bananaBasket = document.querySelector('#banana-basket');

function sortFruits() {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === '🍍') {
      pineappleBasket.textContent += '🍍';
    } else if (fruits[i] === '🍌') {
      bananaBasket.textContent += '🍌';
    }
  }
}

sortFruits();
