import { DOMSelectors } from "./dom";
import { items } from "./array";
import { dealer } from "./array";

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

let a = random_item(items);
let b = random_item(items);
let c = a + b;
let x = random_item(dealer)



function startgame() {
  console.log(a);
  console.log(b);
  console.log(c);
  if (c === 21) {
    console.log(`You win`);
  } else {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
      <button class="frrr">Hit</button>
      <button class="word">Stand</button>
  `
    );
  }
}

function Stand() {
  let eeeee = document.querySelector(".word");
  eeeee.addEventListener("click", function () {
    console.log(x)
    if (x > c) {
      console.log("you lose");
    } else if (dealer === c) {
      console.log("tie");
    } else {
      console.log("you win");
    }
  });
}

function Addnumber() {

  let fax = document.querySelector(".frrr");

  fax.addEventListener("click", function () {
    let d = random_item(items);
    let e = c + d;
    console.log(d);
    console.log(e);
    if (e > 21) {
      console.log(`You lose`);
    } else if (e === 21) {
      console.log("You Win");
    } else {
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <button class="frrr">Hit</button>
        <button class="word">Stand</button>
      
        `
      );
    }
  });
}




DOMSelectors.button.addEventListener("click", function () {
  startgame();
  Stand();
  Addnumber();
});
