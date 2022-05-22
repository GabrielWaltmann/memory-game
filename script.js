let cards = document.querySelectorAll(".card")
let cardsArray = [...cards]

/* 
    console.log() 
*/

let spaces = ["","","","","","","","","","",
              "","","","","","","","","","",]

let SRCadded = [false, false, false, false, false,
             false, false, false, false, false,]

let SRCs = ["images/cards/criper.png",
            "images/cards/ghost.png","images/cards/machado.png","images/cards/pa.png",
            "images/cards/picareta.png","images/cards/pig.png","images/cards/pug.png","images/cards/skeleton.png","images/cards/steve.png","images/cards/sword.png",]

let conter = 0


for(i=0; i< spaces.length; i++){
    spaces[i] = {img:"", isThe2: 0}
}

for(i=0; i< spaces.length; i++){
    while(spaces[i].isThe2 < 2){
        n = Math.round(Math.random() * 10-1)
        if(spaces[i].img != SRCs[n]){
            spaces[i].img = SRCs[n]
            spaces[i].isThe2++
            
            console.log(spaces, n) 

        }

    }
    }








start()


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

/*         number = Math.round(Math.random() * 10)
        p.push(number) 

        let front = cardsArray[i].firstElementChild,
        img = document.createElement("img")
        img.setAttribute("src","images/cards/pig.png")
        front.appendChild(img)

        console.log(front.firstElementChild) */