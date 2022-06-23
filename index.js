let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let reply = document.getElementById("message")
let sumEl = document.querySelector("#sum-El")
let cardsEl = document.getElementById("cards-El")

function getRandomCard(){
    let randomNumber = Math.floor( Math.random()* 13) + 1
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber ===1) {
        return 11
    }
    else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}


function renderGame() {
      sumEl.textContent = "Sum: " + sum
      cardsEl.textContent = "Cards: "

      for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
      }

      if (sum < 21) {
           message = "Do you want to draw another card? "
       
       }
       else if (sum === 21) {
           message = " Wohoo! You've got Blackjack! "
           hasBlackJack = true
       }
        else {
           message = "You're out of the game! "
           isAlive = false
        }
        reply.innerHTML = message
        
 }


 function newCard() {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()

 }
 