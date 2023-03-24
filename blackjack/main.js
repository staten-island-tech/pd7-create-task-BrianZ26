const DOM = {
  playercards: document.getElementById("player-hand"),
  dealercards: document.getElementById("dealer-hand"),
  playcards: document.getElementById("play"),
};
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["♦", "♣", "♥", "♠"];

let dealerHand = [];

let playerHand = [];
let deck = [];
function deckBuilder() {
  suits.forEach((suit) => {
    values.forEach((value) => {
      const card = [value + suit];
      deck.push(card);
    });
  });
  return deck;
}
function drawRandomCard() {
  const cardNum = Math.floor(Math.random() * deck.length);
  const card = deck[cardNum];
  deck.splice(cardNum, 1);
  return card;
}
function calcValue() {
  let value = 0;
  playerHand.forEach((card) => {
    if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
      value += 10;
    } else value += card[0];
  });
}
function playerHit() {}
function dealhands() {
  const dealerHand = [drawRandomCard(), drawRandomCard()];
  calcValue(dealerHand);
  dealerHand.forEach((card) => {
    DOM.dealercards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">${card}</div>`
    );
  });
  const playerHand = [drawRandomCard(), drawRandomCard()];
  calcValue(playerHand);
  console.log(playerHand);
  let pScore = 0;
  playerHand.forEach((card) => {
    console.log(pScore);
    DOM.playercards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">${card}</div>`
    );
  });
}
DOM.playcards.addEventListener("click", function playgame() {
  deckBuilder();
  dealhands();
});
