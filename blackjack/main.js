console.log(1);
const DOM = {
  playercards: document.getElementById("player-hand"),
  dealercards: document.getElementById("dealer-hand"),
};
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

let suits = ["♦", "♣", "♥", "♠"];

let dealerHand = [];

let playerHand = [];

const deckBuilder = () => {
  let deck = [];
  suits.forEach((suit) => {
    values.forEach((value) => {
      const card = value + suit;
      deck.push(card);
      console.log(card);
    });
  });
  return deck;
};

const drawRandomCard = () => {
  const cardNum = Math.floor(Math.random() * deck.length);
  const card = deck[cardNum];
  deck.splice(cardNum, 1);
  console.log(card);
  return card;
};

const dealhands = () => {
  const dealerHand = [drawRandomCard(), drawRandomCard()];
  dealerHand.forEach((card) => {
    DOM.dealercards.insertAdjacentHTML(
      "afterend"`<div class="cards">${card}</div>`
    );
  });
  const playerHand = [drawRandomCard(), drawRandomCard()];
  playerHand.forEach((card) => {
    DOM.playercards.insertAdjacentHTML(
      "afterend"`<div class="cards">${card}</div>`
    );
  });
};
dealhands;
