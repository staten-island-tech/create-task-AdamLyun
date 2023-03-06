import { DOMSelectors } from "./dom";
import { deck } from "./array";

function shuffleDeck(deck) {
  deck.sort(() => 0.5 - Math.random());
}

function dealCard() {
  return deck.pop();
}

function calculateHand(hand) {
  let total = 0;
  let aces = 0;
  for (let card of hand) {
    if (card === "A") {
      aces++;
      total += 11;
    } else if (card === "K" || card === "Q" || card === "J") {
      total += 10;
    } else {
      total += parseInt(card);
    }
  }
  while (aces > 0 && total > 21) {
    total -= 10;
    aces--;
  }
  return total;
}

let playerHand = [];
let dealerHand = [];

shuffleDeck(deck);

playerHand.push(dealCard());
dealerHand.push(dealCard());
playerHand.push(dealCard());
dealerHand.push(dealCard());

Game();

function Game() {
  DOMSelectors.button.addEventListener("click", function () {
    DOMSelectors.button.remove();

    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `<div> 
      <h2 class="hello">Player's hand:  ${playerHand.join(
        ", "
      )} (${calculateHand(playerHand)}) </h2>
   <h3>Dealer's hand: ${dealerHand[0]} , ?<p>
   
   </div>
    <button class="Hit">Hit</button>
    <button id="Stand" >Stand</button>
    `
    );

    Hit();
    Stand();
  });
}

function Hit() {
  let total = calculateHand(playerHand);
  let addcard = document.querySelector(".Hit");
  addcard.addEventListener("click", function () {
    let num = playerHand.push(dealCard());
    if (calculateHand(playerHand) > 21) {
      total += num;
      let newElement = document.createElement("h2");
      newElement.textContent = `Player's hand:  ${playerHand.join(
        ", "
      )} (${calculateHand(playerHand)}) `;
      DOMSelectors.box.querySelector("h2").replaceWith(newElement);
      setTimeout(function () {
        alert("You Lose and The Dealer Wins!");
      }, 1);
      createButton();
    } else {
      total += num;
      let newElement = document.createElement("h2");
      newElement.textContent = `Player's hand:  ${playerHand.join(
        ", "
      )} (${calculateHand(playerHand)}) `;
      DOMSelectors.box.querySelector("h2").replaceWith(newElement);
    }
  });
}

function Stand() {
  let getanswer = document.querySelector("#Stand");
  getanswer.addEventListener("click", function () {
    while (calculateHand(dealerHand) < 17) {
      dealerHand.push(dealCard());
    }
    let newElement = document.createElement("h3");
    newElement.textContent = `Dealers's hand:  ${dealerHand.join(", ")} (${calculateHand(dealerHand)}) `;
    DOMSelectors.box.querySelector("h3").replaceWith(newElement);

    let playerTotal = calculateHand(playerHand);
    let dealerTotal = calculateHand(dealerHand);
    if (dealerTotal > 21) {
      setTimeout(function () {
        alert("Dealer busts! Player wins.");
      }, 1);
    } else if (playerTotal > dealerTotal) {
      setTimeout(function () {
        alert("Player wins!");
      }, 1);
    } else if (dealerTotal > playerTotal) {
      setTimeout(function () {
        alert("Dealer wins.");
      }, 1);
    } else {
      setTimeout(function () {
        alert("It's a tie!");
      }, 1);
    }
    createButton();
  });
}
function createButton() {
  var button = document.createElement("button");
  button.innerHTML = "Start Over";
  document.body.appendChild(button);

  button.addEventListener("click", function () {
    location.reload();
  });
}
