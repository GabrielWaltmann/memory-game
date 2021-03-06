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
let total = 1
checks = []

function createCards(){
    for(i=0;i< 20; i++){
        if(i<10){
            cards.push({html:`<div class="card" id="${i}">
                                <div class="front">
                                    <img src="${SRCS[i]}" alt="Frente da carta">
                                </div>
                                <div class="back" >
                                    <img src="images/cards/back.png" alt="Atras da carta">
                                </div>
                            </div>`,
            image:SRCS[i]})
        }else if(i>=10){
            cards.push({html:`<div class="card" id="${i}">
                                <div class="front">
                                    <img src="${SRCS[i-10]}" alt="Frente da carta">
                                </div>
                                <div class="back" >
                                    <img src="images/cards/back.png" alt="Atras da carta">
                                </div>
                            </div>`,
            image:SRCS[i-10]})
        }
    }
    addCard()
}

function addCard(){
    arrayRandomize = cards.sort(() => Math.random() - 0.5)
    for (let card of arrayRandomize){
        cheap.innerHTML += card.html
    }}

function click(){
    let clicks = document.querySelectorAll(".card")
    pairs = []

    clicks.forEach(click => click.addEventListener('click',(e)=>{
        let element = e.target.parentElement 
        if(element.className == "card rotate" ){
            console.log(element.children[1])
        }else if(element.className == "card" ){
            checkPair(element)
        } 
    }
        
    ))
}

function checkPair(element){

    if (pairs[0] == null){
        pairs[0] = element.id
    }else if (pairs[1] == null){
        pairs[1] = element.id
    }else if(pairs[0] == pairs[1]-10 || pairs[0]-10 == pairs[1]){
        total++

        checks.push(pairs[0],pairs[1])

        pairs[0] = element.id
        pairs[1] = null
    }else{
        document.getElementById(pairs[0]).classList.remove("rotate")
        document.getElementById(pairs[1]).classList.remove("rotate")
        pairs[0] = element.id
        pairs[1] = null

    }

    rotate(element)


}

function rotate(element){element.classList.toggle("rotate")}


function check(){
    if (total >= 10){
        win()
    }else{
        alert(`Faltam ${10-total} pares a serem encontrados!`)
    }
}

function win(){
        document.body.innerHTML += `
        <div class="win" onclick="restart()">
            <h3>Todos os pares foram encontrados!</h3>
            <button>Restart</button>
        </div>
        `
}

function restart(){
    document.location.reload()
}

createCards()
click()
