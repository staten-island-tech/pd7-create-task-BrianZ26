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
  let ds = calcValue(dealerHand);
  console.log("dealer has " + ds);
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
      location.reload();
    }
    console.log("you have " + ps);
  });
  DOM.stay.addEventListener("click", function dealerhit() {
    let ds = calcValue(dealerHand);
    while (ds <= 16) {
      dealerHand.push(drawRandomCard());
      ds = calcValue(dealerHand);
      console.log(ds);
      DOM.dealercards.innerHTML = "";
      dealerHand.forEach((card) => {
        DOM.dealercards.insertAdjacentHTML(
          "beforeend",
          `<div class="cards">${card}</div>`
        );
      });
    }
    if (ds > 21) {
      console.log("Dealer Lose " + ds);
      alert("Win, dealer bust!");
      location.reload();
    } else {
      let pdifference = 21 - ps;
      let ddiffernce = 21 - ds;
      console.log(pdifference);
      console.log(ddiffernce);
      if (pdifference < ddiffernce) {
        alert("win!");
        location.reload();
      } else {
        alert("Lose!");
        location.reload();
      }
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
