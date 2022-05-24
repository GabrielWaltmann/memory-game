/* console.log() */

let cards = document.querySelector(".cards")
var list = []

function show(){
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


    for(x=0; x<=1; x++){
        if(x==0){
            for(i=0; i< 10; i++){
                let card = ""
                    card = `<div class="card" id="${i}">
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
                let card = ""
                    card = `<div class="card" id="${i+10}">
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

    let c = cards.children 
    c = [...c]
    for(i=0; i < c.length; i++){
        c[i].addEventListener("click", (e)=>{
            rotate(e)})
    }

        while(cards.children.length < 20){
            random = Math.round(Math.random() * 20)
            id =  list[random].id
            if(document.getElementById(list[random].id) == undefined && list[random].added == 0){
                cards.innerHTML += (list[random].card)
                list[random].added++
            }          
        }



    function rotate(e){
    let element = e.target.parentElement

    if(element.className == "card"){
        element.setAttribute("class", "card rotate")
    }

    else if(element.className == "card rotate"){
        element.setAttribute("class","card")
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