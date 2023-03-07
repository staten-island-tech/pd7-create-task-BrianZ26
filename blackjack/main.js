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
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      deck.push({ suit, value });
    }
  }
  return deck;
};
const drawRandomCard = () => {
  const cardNum = Math.floor(Math.random() * deck.length);
  const card = deck[cardNum];
  deck.splice(cardNum, 1);
  console.log(card);
  return card;
};
