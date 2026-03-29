const start = document.getElementById("btn")
const image = document.getElementById("image")
const text = document.getElementById("text")
const selectEl = document.getElementById("drop-down")
const playerImage = document.getElementById("player-img")
const playerText = document.getElementById("player-text")
const message = document.getElementById("message")
const playerScoreEl = document.getElementById("player-score")
const computerScoreEl = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0
let isAlive = false

let hands = ["rock", "paper", "scissor"]
let playerChoice

function Player(){
    isAlive = true
    message.textContent = "Let's Play"
    image.src=""

    playerChoice = selectEl.value

    if(playerChoice=="rock"){
        playerImage.src="images/rock.png"
        playerText.textContent="Rock"
    }
    else if(playerChoice=="paper"){
        playerImage.src="images/paper.png"
        playerText.textContent="Paper"
    }
    else{
        playerImage.src="images/scissor.png"
        playerText.textContent="Scissor"
    }
}

function play(){
    let randomNumber = Math.floor(Math.random()*3)
    return hands[randomNumber]
}

function showComputerImage(){
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

    return move
}

function playGame(){
    if(isAlive === true){
        if(playerChoice == "paper" && showComputerImage() == "rock" || playerChoice == "rock" && showComputerImage() == "scissor" || playerChoice == "scissor" && showComputerImage() == "paper" ){
        message.textContent = "Hurray You Won"
        playerScore++
        playerScoreEl.textContent = `Player: ${playerScore}`
    }
        

    else if(showComputerImage() == playerChoice)
        message.textContent = "Game Tie"

    else{
        message.textContent = "Computer wins"
        computerScore++
        computerScoreEl.textContent = `Computer: ${computerScore}`
    }
    isAlive = false
    }
}

start.addEventListener("click",playGame)
selectEl.addEventListener("change",Player)