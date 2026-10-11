
function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    if(computerPick === 1) return "Rock"; 
    else if(computerPick === 2) return "Paper";
    else return "Scissors";
};

function getHumanChoice(){
    let humanPick = prompt("Rock, Paper, or Scissors?");
    return humanPick;
}

console.log(getComputerChoice());
console.log(getHumanChoice());