
/* 
    console.log() 
*/

let cards = document.querySelector(".cards")

function show(){
    let SRCs = ["images/cards/criper.png",
            "images/cards/ghost.png",
            "images/cards/machado.png",
            "images/cards/pa.png",
            "images/cards/picareta.png",
            "images/cards/pig.png",
            "images/cards/pug.png",
            "images/cards/skeleton.png",
            "images/cards/steve.png",
            "images/cards/sword.png"]


    list = []
    for(x=0; x<=1; x++)
    if(x==0){
        for(i=0; i< 10; i++){
            let card = ""
                card = `
                    <div class="card" id="${i}">
                        <div class="front">
                            <img src="${SRCs[i]}" alt="Frente da carta">
                        </div>
                        <div class="back" >
                            <img src="images/cards/back.gif" alt="Atras da carta">
                        </div>
                    </div>`
            list.push(`${card}`)
        }
    }
    else if(x==1){
        for(i=0; i< 10; i++){
            let card = ""
                card = `
                    <div class="card" id="${i+10}">
                        <div class="front">
                            <img src="${SRCs[i]}" alt="Frente da carta">
                        </div>
                        <div class="back" >
                            <img src="images/cards/back.gif" alt="Atras da carta">
                        </div>
                    </div>`
            list.push(`${card}`) 
                    
        }
    }
    for(i=0; i< list.length; i++){
        random = Math.round(Math.random() * 20)
        if (document.getElementById("#"+random) == null){
            cards.innerHTML += list[random]
        }
    }

    let c = cards.children 
    c = [...c]
    for(i=0; i < c.length; i++){
    c[i].addEventListener("click", (e)=>{
        rotate(e)
        console.log(c[i]) 


    })

    }
    function rotate(e){
    let r = ""   
    r = e.target.parentElement 
    r = r.parentElement
    console.log(r.parentElement) 


    if(r.className == "card"){
        r.setAttribute("class", "card rotate")
    }

    else if(r.className == "card rotate"){
        r.setAttribute("class","card")
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