let hasBlackjack = false;
let isAlive = false;
let sum = 0;
let cards = [];
// 1. variable message, assign empty string
let message = '';
const player = {
  name: 'Sam',
  betAmount: '$100',
};
const messageEl = document.querySelector('#message-el');
const sumEl = document.querySelector('#sum-el');
const cardsEl = document.querySelector('#cards-el');
const playerEl = document.querySelector('#player-el');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

playerEl.textContent = `Player Name: ${player.name}, Amount: ${player.betAmount}`;

// random number generator
function getRandomNumber() {
  return Math.floor(Math.random() * 13) + 1;
}

// rename to check values
function startGame() {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;

  checkValues();
}

function checkValues() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }

  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = 'Do you want to draw a new card?';
  } else if (sum == 21) {
    message = 'Congrats! You win blackjack.';
    hasBlackJack = true;
  } else if (sum > 21) {
    message = 'Game Over!';
    isAlive = false;
  }
  messageEl.textContent = message;
}

// AND, OR
function newCard() {
  if (isAlive === true && hasBlackjack === false) { // boolean
    let card = getRandomNumber();
    sum += card;
    cards.push(card);
    checkValues();
  } else if (player.name) { // true
    alert('You are already out of the game!');
  } else if (hasBlackjack === true) {
    alert('You already won!');
  }
}
