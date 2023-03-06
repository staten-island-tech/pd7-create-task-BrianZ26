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
  let suits = ["♦", "♣", "♥", "♠"];
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
const cards = deckBuilder();
dom.play.addEventListener("click", function play() {
  hand = [];
  totalScore = [];
  playerDraw(cards);
  playerDraw(cards);
  let sum = 0;
  totalScore.forEach((el) => {
    sum += el;
  });
  console.log(hand, sum);
});
deckBuilder(cards);
