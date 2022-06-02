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
let total = 0

function createCards(){
    for(i=0;i< 20; i++){
        if(i<10){
            cards.push({html:`
                    <div class="card" id="${i}">
                        <div class="front">
                            <img src="${SRCS[i]}" alt="Frente da carta">
                        </div>
                        <div class="back" >
                            <img src="images/cards/back.png" alt="Atras da carta">
                        </div>
                    </div>
            `,
            image:SRCS[i]})
        }else if(i>=10){
            cards.push({html:`
            <div class="card" id="${i}">
                <div class="front">
                    <img src="${SRCS[i-10]}" alt="Frente da carta">
                </div>
                <div class="back" >
                    <img src="images/cards/back.png" alt="Atras da carta">
                </div>
            </div>
            `,
            image:SRCS[i-10]})
        }
    }

    addCard()
}

function addCard(){

    arrayRandomize = cards.sort(() => Math.random() - 0.5)
    for (let card of arrayRandomize){
        cheap.innerHTML += card.html
    }
}

function click(){
    let clicks = document.querySelectorAll(".card")
    pairs = []
    clicks.forEach(click => click.addEventListener('click',(e)=>{
        let element = e.target.parentElement
        element.classList.toggle("rotate")
        checkPair(element)

    }

        
    ))
}

function checkPair(element){
    if (pairs[0] == null && pairs[1] == null){
        pairs[0] = element.id
    }else if (pairs[0] == null){
        pairs[0] = element.id
    }else if (pairs[1] == null){
        pairs[1] = element.id
    }else if(pairs[0] == pairs[1]-10 ||
             pairs[0]-10 == pairs[1]){
        total++

        document.getElementById(pairs[0]).firstChild.removeEventListener("click", checkWin())
        document.getElementById(pairs[1]).firstChild.removeEventListener("click", console.log)

        pairs[0] = element.id
        pairs[1] = null

        
            
    }else{
        document.getElementById(pairs[0]).classList.remove("rotate")
        document.getElementById(pairs[1]).classList.remove("rotate")


        pairs[0] = element.id
        pairs[1] = null
        
    }
}

function checkWin(){
    console.log(total)
    if (total == 10){
        win()
    }     
}

function win(){
    alert("Parabens! Você encontrou todos os pares")
    document.location.reload(true)
}

createCards()

click()
