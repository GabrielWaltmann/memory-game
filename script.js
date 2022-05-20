let cards = document.querySelectorAll(".card")
let cardsArray = [...cards]
let distribute = [0,0]


for(i=0; i< cardsArray.length; i++){

    cardsArray[i].addEventListener("click", (e)=>{
        rotate(e)
    })


}

 positions(cardsArray.length)


    function positions(total){
        pos_distribuite = 0
        randomize = Math.round(Math.random() * total)
        while(distribute[0] + distribute[1] == total){
            if 
        }
    }


    function rotate(e){

        let card = e.target.parentElement



        if(card.className == "card"){
            card.setAttribute("class", "card rotate")
        }

        else if(card.className == "card rotate" || turns == 2){
            card.setAttribute("class","card")
        }
    }
