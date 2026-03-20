let start = document.getElementById("btn")
let image = document.getElementById("image")
let text = document.getElementById("text")

let hands = ["rock", "paper", "scissor"]

function play(){
    let randomNumber = Math.floor(Math.random()*3)
    return hands[randomNumber]
}

function playGame(){
    let move = play()
    if(move=="rock"){
        image.src="images/rock.png"
        text.textContent="Rock"
    }
    else if(move=="paper"){
        image.src="images/paper.png"
        text.textContent="Paper"
    }
    else{
        image.src="images/scissor.png"
        text.textContent="Scissor"
    }
}

start.addEventListener("click",playGame)

