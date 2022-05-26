/* console.log() */

let cards = document.querySelector(".cards")

let list = []
let hits = []
let total = []
let images = ["images/cards/criper.png",
"images/cards/ghost.png",
"images/cards/machado.png",
"images/cards/pa.png",
"images/cards/picareta.png",
"images/cards/pig.png",
"images/cards/pug.png",
"images/cards/skeleton.png",
"images/cards/steve.png",
"images/cards/sword.png"]


function show(){
    for(x=0; x<=1; x++){
        if(x==0){
            for(i=0; i< 10; i++){
                let card = `<div class="card" id="${i}">
                                <div class="front">
                                    <img src="${images[i]}" alt="Frente da carta">
                                </div>
                                <div class="back" >
                                    <img src="images/cards/back.gif" alt="Atras da carta">
                                </div>
                            </div>`
                list.push({card:`${card}`,added:0,id:i})
            }
        }
        else if(x==1){
            for(i=0; i< 10; i++){
                let card = `<div class="card" id="${i+10}">
                                <div class="front">
                                    <img src="${images[i]}" alt="Frente da carta">
                                </div>
                                <div class="back" >
                                    <img src="images/cards/back.gif" alt="Atras da carta">
                                </div>
                            </div>`
                list.push({card:`${card}`,added:0,id:i}) 
                        
            }
        }
    }



    while(total < 20){
        let random = Math.round(Math.random() * 10) 
        if(document.getElementById(list[random].id) == null && list[random].added == 0){
            cards.innerHTML += list[random].card
            list[random].added++
            total++
        }
        else if(document.getElementById(list[random].id) != null && list[random].added == 1){
            cards.innerHTML += list[random].card
            list[random].added++
            total++
        }
    }

    let cardsChildren = cards.children 
    cardsChildren = [...cardsChildren]
    for(i=0; i < cardsChildren.length; i++){
        cardsChildren[i].addEventListener("click", (e)=>{
            rotate(e)})
    }

    let round = [{id:null, turn:0},{id:null, turn:0}]
    function rotate(e){
        let element = e.target.parentElement
        if (round[0].turn == 0 || round[1].turn == 0){

            if(round[0].turn == 0){
                round[0].turn++
                round[0].id = element.id
                console.log(round[0].turn)
                if(element.className == "card" ){
                    element.setAttribute("class", "card rotate")
                }
    
                else if(element.className == "card rotate"){
                    element.setAttribute("class","card")
                }
            }
            else if(round[1].turn == 0){
                console.log(round[0].turn)
                round[1].turn++
                round[1].id = element.id
                if(element.className == "card" ){
                    element.setAttribute("class", "card rotate")
                }
    
                else if(element.className == "card rotate"){
                    element.setAttribute("class","card")
                }
            }      
        }
        else if(round[0].turn == 1 && round[1].turn == 1){
            
            if(round[0].id != round[1].id){


                    

                    console.log(list, document.getElementsByClassName("rotate", "card"))
                
                
               /*  round[0].turn = 0
                round[1].turn = 0

                round[0].id = null
                round[1].id = null  */

            }

        }


    }

}



 /* 

function start(){



    
    for(i=0; i< cardsArray.length; i++){

        cardsArray[i].addEventListener("click", (e)=>{
            rotate(e)
        })
    
    }

}


    function rotate(e){
        
        let card = e.target.parentElement

        if(card.className == "card"){
            card.setAttribute("class", "card rotate")
        }

        else if(card.className == "card rotate"){
            card.setAttribute("class","card")
        }
    }

       number = Math.round(Math.random() * 10)
        p.push(number) 

        let front = cardsArray[i].firstElementChild,
        img = document.createElement("img")
        img.setAttribute("src","images/cards/pig.png")
        front.appendChild(img)

        console.log(front.firstElementChild) */