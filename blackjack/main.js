const DOM = {
  hit: document.getElementById("hit"),
  stay: document.getElementById("stay"),
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
  if (deck.length <= 2) {
    deckBuilder();
  }
  return card;
}
function dealhands() {
  const dealerHand = [drawRandomCard(), drawRandomCard()];
  dealerHand.forEach((card) => {
    DOM.dealercards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">${card}</div>`
    );
  });
  const playerHand = [drawRandomCard(), drawRandomCard()];
  console.log(playerHand);
  playerHand.forEach((card) => {
    DOM.playercards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">${card}</div>`
    );
  });
  DOM.hit.addEventListener("click", function playerHit() {
    playerHand.push(drawRandomCard());
    console.log(playerHand);
    DOM.playercards.innerHTML = "";
    playerHand.forEach((card) => {
      DOM.playercards.insertAdjacentHTML(
        "beforeend",
        `<div class="cards">${card}</div>`
      );
    });
    let ps = calcValue(playerHand);
    console.log(ps);
  });
}
const calcValue = (hand) => {
  let value = 0;
  hand.forEach((card) => {
    if (card.length === 2) {
      if (card[0] === "K" || card[0] === "Q" || card[0] === "J") {
        value += 10;
      } else {
        value += Number(card[0]);
      }
    }
    console.log(value);
  });
};

function playgame() {
  DOM.playercards.innerHTML = "";
  DOM.dealercards.innerHTML = "";
  deckBuilder();
  dealhands();
}
DOM.playcards.addEventListener("click", playgame);
