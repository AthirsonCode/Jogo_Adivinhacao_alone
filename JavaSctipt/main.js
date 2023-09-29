//variáveis
const input = document.querySelector("input")
const tryButton = document.querySelector("#try")
const againButton = document.querySelector("#again")
const modal = document.querySelector(".modal")
const screen1 = document.querySelector(".screen1")
const content = document.querySelector(".modal h2")
//random
let random = Math.floor(Math.random()*11)
let tentativas = 1;


tryButton.addEventListener("click", tentar)
function tentar(event){
  event.preventDefault(event)

  if(input.value == random){
    modal.classList.remove("hide");
    screen1.classList.add("hide")
    content.innerText = `Acertou em ${tentativas} tentativas!`
    input.value = ""
  }
  
  tentativas++
}

againButton.addEventListener("click", novamente)
function novamente(){
  modal.classList.add("hide");
  screen1.classList.remove("hide")
  random = Math.floor(Math.random()*11)
  tentativas = 1;
}

