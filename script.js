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

let playerScore = 0
let computerScore = 0

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

function game(){
    for (let i = 0; i < 5; i++) {
        comp = getComputerChoice()
        player = prompt("Rock, Paper or Scissors?")
        alert(whoWins(comp,player)+"\nScore\nyou: "+playerScore+" vs computer: "+computerScore)
    }
    alert("The winner is: "+ (playerScore > computerScore ? "You" : "The Computer"))
}

game()