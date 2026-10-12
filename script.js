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
    console.log(`GAME START--->\n`);

    //Setting game limit to 5 games
    for(let gameRound = 1;gameRound <= 5; gameRound++){
        console.log(`\nRound ${gameRound}\n`);
         let playerPick = getHumanChoice();
         let opponentPick = getComputerChoice();

         console.log(`Player: ${playerPick} | Computer:  ${opponentPick}`);

         let result = playRound(playerPick, opponentPick);
         console.log(result);
    }

    console.log(`\nGAME OVER!\n`);
    console.log(`Player score: ${humanScore} || Computer score: ${computerScore}`);
    if(humanScore > computerScore){
        console.log(`\n!!!PLAYER WINS!!!!\n`);
    }   else{
        console.log(`\n!!!PLAYER LOSES!!!!\n`);
    }

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