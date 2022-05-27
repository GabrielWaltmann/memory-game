/* console.log() */


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
let list = []
let clicks = {doubles:[null,null], hits:0}
let box = document.querySelector(".cards")


for(x=0; x<=1; x++){
    if(x==0){
        for(i=0; i< 10; i++){
            let card = `<div class="card " id="${i}">
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
            let card = `<div class="card " id="${i+10}">
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

setInterval(function random (){
    pos = Math.round(Math.random() * 10)
    if(list[pos].added == 0 && pos != 10){
        box.innerHTML += list[pos].card
        list[pos].added++
    }
    else if(list[pos].added == 1 && pos != 10){
        box.innerHTML += list[pos].card
        list[pos].added++
    }
    
},10)

    



setTimeout(function rotate(){
    cards = box.children
    for(i=0; i < cards.length; i++){
        cards[i].addEventListener("click", (e)=>{
            let element = e.target.parentElement

            if(clicks.hits == 10){
                alert("Parabens! Você encontrou todos os pares")
            }

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

