
// console.log("Hello World");

function getComputerChoice(){
    let computerPick = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    //return computerPick;
    if(computerPick === 1){
       return "Rock"; 
    }
    else if(computerPick === 2) return "Paper";
    else return "Scissors";
};

console.log(getComputerChoice());