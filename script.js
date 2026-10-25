//How to get the options from the computer
function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(computerPick === 1) return "rock"; 
    else if(computerPick === 2) return "paper";
    else return "scissors";
};

//Full Game
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    
    const playerScoreDisplay = document.querySelector("#player-score");
    const computerScoreDisplay = document.querySelector("#computer-score");
    const buttons = document.querySelectorAll("button");

    buttons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
        const playerChoice = e.target.id;
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
        });
    });

    const resultDisplay = document.createElement('div');
    const container = document.querySelector('#container');
    container.appendChild(resultDisplay);

    function updateScores(){
        playerScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
    }

    function playRound(humanPick, computerPick){    
         humanPick = humanPick.toLowerCase();
         computerPick = computerPick.toLowerCase();
         let result = '';
         if(humanPick === computerPick){
            result = "It's a draw! Try again.";
            }
        else if ((humanPick === "rock" && computerPick === 'scissors') ||
                (humanPick === "paper" && computerPick === 'rock') ||
                (humanPick === "scissors" && computerPick === 'paper'))
              {
                 humanScore++;
                 result = `Player wins! ${humanPick} beats ${computerPick}`;;
                 
            }else{
                computerScore++;
                result = `Player loses! ${computerPick} beats ${humanPick}`;;
        } 
        resultDisplay.textContent = result;
        updateScores();
    }

}

playGame();