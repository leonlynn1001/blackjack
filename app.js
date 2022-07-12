//cards array

//initial blackjact

let hasBlackjack = false;
let isAlive = false;
let message = "";
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector(".sumText");
const cardsEl = document.querySelector(".cards");
//card array
let sum = 0;
let cards = [];
let player = {
  name: "Rita",
  amount: 1000,
};
const playerName = document.querySelector("#let player");
playerName.textContent = "Player Name: ${player.name} ${player.amount}";
//random nunmber
function getRandomNumber() {
  return Math.floor(Math.random() * 13) + 1;
}

//start game funciton
function startGame() {
  let firstcard = getRandomNumber();
  let secondcard = getRandomNumber();
  let cards = [firstcard, secondcard];
  isAlive = true;
  let sum = firstcard + secondcard;
  checkVaulues();
}

function checkVaulues() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = `Sum: ${sum}`;
  if (sum < 21) {
    message = "Want to draw a new card?";
  } else if (sum == 21) {
    message = "Congrats!you win blackjack";
    hasBlackjack = true;
  } else if (sum > 21) {
    message = "Game over!";
    isAlive = false;
  }
  messageEl.textContent = message;
}
function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomNumber();
    sum = sum + card;
    cards.push(card);
    checkVaulues();
  } else if (isAlive === false) {
    alert("You are already out of the game.");
  } else if (hasBlackjack === true) {
    alert(`You already get blackjack`);
  }
}
