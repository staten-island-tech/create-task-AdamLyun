import { DOMSelectors } from "./dom";
import { items } from "./array";


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


console.log(random_item(items));



DOMSelectors.button.addEventListener("click", function () {
let x= random_item(items)+random_item(items)

function factual(){
  if (x=19) {
    console.log(`You win`)
    
  }  else {
    console.log('fax')
    
  }
}
  
console.log(x)
});


