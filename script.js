/* set cards id */
let cards = document.querySelectorAll('.card')
let listCards = [...cards]
for (i=0; i < listCards.length; i++){
    listCards[i].setAttribute("id", i+1)

    listCards[i].addEventListener("click", turn)
}

function turn(e){
    var card = e.target
    card.setAttribute("class", "card rotate")
    console.log(card.className)
}
