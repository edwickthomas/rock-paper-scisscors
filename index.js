// function getcomputerchoice
// generate a random number between 0 and 1
// multiply this with 99 and store in a variable
// if the variable is less than or equal to 33 return rock
// if the variable is less than or equal to 66 and greaterthan 33 return scissors
// else return paper

function getComputerChoice(){
    let rand = Math.random()*99
    if (rand<=33){
        return "rock"
    }
    else if ((rand<=66) && (rand>33)){
        return "scissors"
    }
    else {
        return "paper"
    }
}
console.log(getComputerChoice())

function getHumanChoice(){
    let hChoice= prompt("Please enter a value either rock, paper or scissors")
    return hChoice
}
console.log(getHumanChoice())
let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase()
}
