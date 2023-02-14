function deckBuilder() {
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
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      cards.push({ value, suit });
    }
  }
  return cards;
}
function randomCard(cards) {
  const random = Math.floor(Math.random() * 51);
  const cardValue = cards[random].value;
  const cardSuit = cards[random].suit;
  console.log(cardValue, cardSuit);
  console.log(cards.splice(random, 1));
}

const cards = deckBuilder();
randomCard(cards);
randomCard(cards);
