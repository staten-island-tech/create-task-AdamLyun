import { DOMSelectors } from "./dom";
import { items } from "./array";

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}


let a = random_item(items);
let b= random_item(items);
let c= a+b

function factual() {
console.log(a)
console.log(b)
console.log(c)
  if (c >= 21) {
    console.log(`You win`);
  } else {
    DOMSelectors.box.insertAdjacentHTML(
      "beforeend",
      `
        <button class="frrr">Remove</button>
  
    `
    );
  }

}
function something() {
  let fax = document.querySelectorAll(".frrr");
  fax.forEach((easy) => {
    easy.addEventListener("click", function () {
     let d = random_item(items);
     let e= c+d
      console.log(e);
    });
  });
}

DOMSelectors.button.addEventListener("click", function () {
  factual();
  something();
  
});