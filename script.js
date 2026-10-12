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

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let playerPick = getHumanChoice();
    let opponentPick = getComputerChoice();

    console.log(`Player: ${playerPick} | Computer:  ${opponentPick}`);

    let result = playRound(playerPick, opponentPick);
    console.log(result);


    function playRound(humanPick, computerPick){    
         humanPick = humanPick.toLowerCase();
         computerPick = computerPick.toLowerCase();
         if(humanPick === computerPick){
            return "It's a draw! Try again.";
            }
        else if ((humanPick === "rock" && computerPick === 'scissors') ||
                (humanPick === "paper" && computerPick === 'rock') ||
                (humanPick === "scissors" && computerPick === 'paper'))
              {
                 humanScore++;
                 return `Player wins! ${humanPick} beats ${computerPick}`;;
                 
            }else{
                computerScore++;
                return `Player loses! ${computerPick} beats ${humanPick}`;;
        } 
    }

}

playGame();