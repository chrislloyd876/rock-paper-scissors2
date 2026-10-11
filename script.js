let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(computerPick === 1) return "rock"; 
    else if(computerPick === 2) return "paper";
    else return "scissors";
};

function getHumanChoice(){
    let humanPick = prompt("Rock, Paper, or Scissors?");
    return humanPick;
}

function playRound(humanPick, computerPick){
    humanPick = humanPick.toLowerCase();
    computerPick = computerPick.toLowerCase();
    if(humanPick === computerPick){
        console.log("It's a draw! Try again.");
    }
    else if ((humanPick === "rock" && computerPick === 'scissors') ||
            (humanPick === "paper" && computerPick === 'rock') ||
            (humanPick === "scissors" && computerPick === 'paper'))
            {
                 console.log(`Player wins! ${humanPick} beats ${computerPick}`);
                 humanScore++;
            }
    else
        {
            console.log(`Player loses! ${computerPick} beats ${humanPick}`);
            computerScore++;
        } 
}

let hPick = getHumanChoice();
let cPick = getComputerChoice();
console.log(hPick);
console.log(cPick);
playRound(hPick, cPick);