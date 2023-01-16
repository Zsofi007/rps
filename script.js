var rock = document.createElement('button')
rock.innerHTML = "ROCK"
var paper = document.createElement('button')
paper.innerHTML = "PAPER"
var scissors = document.createElement('button')
scissors.innerHTML = "SCISSORS"

document.getElementById("buttons").appendChild(rock)
document.getElementById("buttons").appendChild(paper)
document.getElementById("buttons").appendChild(scissors)

rock.addEventListener("click",onClick)
paper.addEventListener("click",onClick)
scissors.addEventListener("click",onClick)

let playerScore = 0
let computerScore = 0

var scores = document.createElement('div')
scores.id = "scores"
scores.innerHTML = "You: 0 vs Computer: 0"
document.getElementById("body").appendChild(scores)
document.getElementById("choices").innerHTML = "To begin, click on a button below"


function onClick(e){
    id = 0;
    if(e.target.innerHTML === "PAPER"){
        id = 1
    }else if(e.target.innerHTML === "SCISSORS"){
        id = 2
    }
    player = ""
    computer = getComputerChoice()
    if(id === 0){
        player = "Rock"
    }else if(id === 1){
        player = "Paper";
    }else{
        player = "Scissors"
    }
    document.getElementById("choices").innerHTML = "You chose "+player+", the Computer chose: "+computer
    res = whoWins(computer,player)
    scores.innerHTML = "You: "+playerScore+" vs Computer: "+computerScore+"<br>"+res
    if(playerScore === 5){
        scores.innerHTML += "<br>The Winner is You"
        rock.removeEventListener("click",onClick)
        paper.removeEventListener("click", onClick)
        scissors.removeEventListener("click", onClick)

    }else if(computerScore === 5){
        scores.innerHTML += "<br>The Winner is the Computer"
        rock.removeEventListener("click",onClick)
        paper.removeEventListener("click", onClick)
        scissors.removeEventListener("click", onClick)
    }
}

function getComputerChoice(){
    a = Math.floor(Math.random() * 3)
    let res;
    if(a === 0){
        res = "Rock";
    }else if(a === 1){
        res = "Paper";
    }else{
        res = "Scissors"
    }
    return res;
}


function whoWins(comp,player){
    player = player.toString().toLowerCase()
    string = player.charAt(0).toUpperCase() + player.slice(1)
    player = string
    if(comp === player){
        return "It's a draw!"
    }else if((comp === "Rock" && player === "Scissors") ||
    (comp === "Scissors" && player === "Paper") ||
    (comp === "Paper" && player === "Rock")){
        computerScore += 1;
        return "You lose! "+comp+" beats "+player
        
    }else{
        playerScore+=1
        return "You win! "+player+" beats "+comp;
        
    }
}


