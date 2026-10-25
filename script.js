//How to get the options from the computer
function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(computerPick === 1) return "rock"; 
    else if(computerPick === 2) return "paper";
    else return "scissors";
};

//How to get the user's choice
function getHumanChoice(){
    let humanPick = prompt("Rock, Paper, or Scissors?");
    return humanPick;
}


const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", function (e) {
    console.log(e.target.id);
    });
});

//Full Game
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    console.log(`<---GAME START--->\n`);

    console.log(`\nGAME OVER!\n`);
    console.log(`\n\t\t<---FINAL SCORES--->`);
    console.log(`PLAYER SCORE: ${humanScore} || COMPUTER SCORE: ${computerScore}`);
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