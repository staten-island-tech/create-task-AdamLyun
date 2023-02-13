import { DOMSelectors } from "./dom";
import { items } from "./array";


function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}


console.log(random_item(items));



DOMSelectors.button.addEventListener("click", function () {
factual()
  something()
  somethingelse()
console.log(x)
});


let x= random_item(items)+random_item(items)

function factual(){
  while (x>=19) {
    if (x>=19) {
      console.log(`You win`)
      
    }  else if (x>19){
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <button class="amongus">Remove</button>
  
    `
      );
      
    } else{
      DOMSelectors.box.insertAdjacentHTML(
        "beforeend",
        `
        <button class="frrr">Remove</button>
  
    `)
    }
    


  }
}
function something(){
  let fax= document.querySelectorAll(".amongus")
  fax.forEach((easy)=>
  {
    easy.addEventListener("click", function(){
      let q= x+ random_item(items)
      
    })
  })
}
function somethingelse(){
  let fax= document.querySelectorAll(".amongus")
  fax.forEach((easy)=>
  {
    easy.addEventListener("click", function(){
      console.log("bye")
    })
  })
}