let SRCS = ["images/cards/criper.png",
"images/cards/ghost.png",
"images/cards/machado.png",
"images/cards/pa.png",
"images/cards/picareta.png",
"images/cards/pig.png",
"images/cards/pug.png",
"images/cards/skeleton.png",
"images/cards/steve.png",
"images/cards/sword.png"]

let cards = []
let cheap = document.querySelector(".cheap")

for(SRC of SRCS){
    cards.push(createCard(SRC))
    console.log(SRC)
}

 function createCard(SRC){
    const random = Math.round(Math.round() * 20)
    if(findCard(random) == false){
        return {
            html: `
                <div class="card" id="${random}">
                    <div class="front">
                        <img src="${SRC}" alt="Frente da carta">
                    </div>
                    <div class="back" >
                        <img src="images/cards/back.png" alt="Atras da carta">
                    </div>
                </div>`,
            }
    }
}

function findCard(random){
    find = cards.indexOf(random)
    if (find == -1){
        return false
    } else{
        return true
    }
} 

/* createCards()

rotate()

function createCards(){
    list = []
    for(x=0; x<=1; x++){
        if(x==0){
            for(i=0; i< 10; i++){
                let card = `<div class="card " id="${i}">
                                <div class="front">
                                    <img src="${images[i]}" alt="Frente da carta">
                                </div>
                                <div class="back" >
                                    <img src="images/cards/back.png" alt="Atras da carta">
                                </div>
                            </div>`
                list.push({card:`${card}`,added:0,id:i})
            }
        }
        else if(x==1){
            for(i=0; i< 10; i++){
                let card = `<div class="card " id="${i+10}">
                                <div class="front">
                                    <img src="${images[i]}" alt="Frente da carta">
                                </div>
                                <div class="back" >
                                    <img src="images/cards/back.png" alt="Atras da carta">
                                </div>
                            </div>`
                list.push({card:`${card}`,added:0,id:i}) 
                        
            }
        }
    }

     random()

}

function random (){
    box.innerHTML = ""
    setInterval( ()=>{
        number = Math.round(Math.random() * 10)
        if(list[number].added == 0 && number != 10){
            box.innerHTML += list[number].card
            list[number].added++
        }
        else if(list[number].added == 1 && number != 10){
            box.innerHTML += list[number].card
            list[number].added++
        }    
    },10)
    
    rotate()

}
 
document.querySelector("#check").addEventListener("click", ()=>{
    if(clicks.hits >= 10 && stopMessage == false){
        message = `<div class="message" > 
                <p>Todos os pares foram encontrados!</p>
                <button onclick="restart()" class="restart">Restart</button>
               </div>`
        document.body.innerHTML += message
        stopMessage = true
    }else if(clicks.hits < 10){
        message = `<div class="message" > 
                        <ion-icon name="close-circle-outline" onclick="hide()"></ion-icon>
                        <p>Faltam ${10-clicks.hits} pares a serem encontrados</p>
                   </div>`
        document.body.innerHTML += message

    }
})

   
function rotate(){
    setTimeout(() =>{
        for(i=0; i < box.children.length; i++){
            box.children[i].addEventListener("click", (e)=>{
                let element = e.target.parentElement


                if(clicks.doubles[0] == null){
                    clicks.doubles[0] = element
                    element.classList.toggle("rotate")
                } else if(clicks.doubles[1] == null){
                    clicks.doubles[1] = element
                    element.classList.toggle("rotate")
                }else if(clicks.doubles[0].id != clicks.doubles[1].id){
                    clicks.doubles[0].classList.remove("rotate")
                    clicks.doubles[1].classList.remove("rotate")

                    clicks.doubles[0] = null
                    clicks.doubles[1] = null
                }else if(clicks.doubles[0].id == clicks.doubles[1].id){
                    clicks.hits++
                    clicks.doubles[0] = null
                    clicks.doubles[1] = null
                }
            })
        }        
    },500)
}

function restart(){
    location.reload()
}

function hide(){
    document.querySelector(".message").style = "display: none"
} */