import { DOMSelectors } from "./dom";
import { numbers } from "./array";
const commands = {
  createCard: function () {
    const random = Math.floor(Math.random() * numbers.length);
    console.log(random, numbers[random]);
  },
};

DOMSelectors.button.addEventListener("click", function () {
  commands.createCard();
});
