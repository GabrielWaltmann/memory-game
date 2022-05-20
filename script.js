cards = document.querySelectorAll(".card")
cardsArray = [...cards]

    for(i=0; i< cardsArray.length; i++){
        cardsArray[i].addEventListener("click", (e)=>{
            e.target.parentElement.setAttribute("class", "rotate")
            console.log(e.target.parentElement)
        })
    }

