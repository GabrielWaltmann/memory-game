cards = document.querySelectorAll(".card")
cardsArray = [...cards]

document.addEventListener("DOMContentLoaded", (e)=>{
    
})

for(i=0; i< cardsArray.length; i++){
    cardsArray[i].addEventListener("click", (e)=>{
        clicked()
    })
}

function clicked(){
    console.log("clicou")
}