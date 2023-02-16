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
  let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
  let cards = [];
  for (let s = 0; s < suits.length; s++) {
    for (let v = 0; v < values.length; v++) {
      const value = values[v];
      const suit = suits[s];
      const sc = score[v];
      cards.push({ value, suit, sc });
    }
  }
  return cards;
}
let hand = [];
let totalScore = [];
function playerDraw(cards) {
  let random = Math.floor(Math.random() * 51);
  let cardValue = cards[random].value;
  let cardSuit = cards[random].suit;
  let score = cards[random].sc;
  hand.push({ cardValue, cardSuit });
  totalScore.push(score);
  cards.splice(random, 1);
}
function draw() {
  playerDraw(cards);
  console.log(hand);
}

const cards = deckBuilder();
playerDraw(cards);
playerDraw(cards);
playerDraw(cards);
playerDraw(cards);
playerDraw(cards);
let sum = 0;
totalScore.forEach((el) => {
  sum += el;
});
console.log(hand, sum);
