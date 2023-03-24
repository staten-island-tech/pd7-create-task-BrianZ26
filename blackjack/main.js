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
      const card = [value, suit];
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
  let dealerHand = [drawRandomCard(), drawRandomCard()];
  dealerHand.forEach((card) => {
    DOM.dealercards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">${card}</div>`
    );
  });
  let playerHand = [drawRandomCard(), drawRandomCard()];
  playerHand.forEach((card) => {
    DOM.playercards.insertAdjacentHTML(
      "beforeend",
      `<div class="cards">${card}</div>`
    );
  });
  let ps = calcValue(playerHand);
  console.log("you have " + ps);
  DOM.hit.addEventListener("click", function playerHit() {
    playerHand.push(drawRandomCard());
    DOM.playercards.innerHTML = "";
    playerHand.forEach((card) => {
      DOM.playercards.insertAdjacentHTML(
        "beforeend",
        `<div class="cards">${card}</div>`
      );
    });
    let ps = calcValue(playerHand);
    if (ps > 21) {
      console.log("Lose");
      alert("Lose, your hand was " + ps);
      DOM.playercards.innerHTML = "";
      DOM.dealercards.innerHTML = "";
      dealerHand = [];
      playerHand = [];
    }
    console.log("you have " + ps);
  });
  DOM.stay.addEventListener("click", function dealerhit() {
    let ds = calcValue(dealerHand);
    console.log(ds);
    if (ds <= 16) {
      dealerHand.push(drawRandomCard());
      let ds = calcValue(dealerHand);
      DOM.dealercards.innerHTML = "";
      dealerHand.forEach((card) => {
        DOM.dealercards.insertAdjacentHTML(
          "beforeend",
          `<div class="cards">${card}</div>`
        );
      });
    }
    if (ds > 21) {
      console.log("Lose");
    }
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
  });
  return value;
};

function playgame() {
  DOM.playercards.innerHTML = "";
  DOM.dealercards.innerHTML = "";
  deckBuilder();
  dealhands();
}
DOM.playcards.addEventListener("click", playgame);
