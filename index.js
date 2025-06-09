// function getcomputerchoice
// generate a random number between 0 and 1
// multiply this with 99 and store in a variable
// if the variable is less than or equal to 33 return rock
// if the variable is less than or equal to 66 and greaterthan 33 return scissors
// else return paper

function getComputerChoice(){
    let rand = Math.random()*99;
    if (rand<=33){
        return "rock";
    }
    else if ((rand<=66) && (rand>33)){
        return "scissors";
    }
    else {
        return "paper";
    }
}

function getHumanChoice(){
    let hChoice= prompt("Please enter a value either rock, paper or scissors")
    return hChoice
}
let humanScore = 0
let computerScore = 0

function playRound(humanChoice,computerChoice){
    let hChoice = humanChoice.toLowerCase()
    let combined = humanChoice+computerChoice
    console.log("your pick is "+humanChoice+", The computer choice is "+computerChoice)
    switch(combined){
        case "rockscissors":
            humanScore=humanScore+1
            console.log("You win! rock beats scissors")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
        case "rockrock":
            console.log("Tie! computer also picked rock")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
        case "rockpaper":
            computerScore=computerScore+1
            console.log("You lose! Paper Beats rock")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
        case "scissorsrock":
            computerScore=computerScore+1
            console.log("You lose! rock Beat scissors")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;

        case "scissorspaper":
            humanScore=humanScore+1
            console.log("You win! scissors beats paper")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
        case "scissorsscissors":
            console.log("Tie! computer also picked scissors")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
        case "paperrock":
            humanScore=humanScore+1
            console.log("You win! paper beats rock")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;


        case "paperpaper":
            console.log("Tie! computer also picked paper")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
        case "paperscissors":
            computerScore=computerScore+1
            console.log("You lose! Scissors Beat paper")
            console.log("your score is "+ humanScore)
            console.log("Computers score is "+computerScore)
            break;
    }
}    
function playGame(){
    let i=5
    
    
    switch (i){
        case 5:
            let humanSelection = getHumanChoice()
            let computerSelection = getComputerChoice()
            playRound(humanSelection,computerSelection)
            i=i-1
        case 4:
            humanSelection = getHumanChoice()
            computerSelection = getComputerChoice()
            playRound(humanSelection,computerSelection)
            i=i-1
        case 3:
            humanSelection = getHumanChoice()
            computerSelection = getComputerChoice()
            playRound(humanSelection,computerSelection)
            i=i-1
        case 2:
            humanSelection = getHumanChoice()
            computerSelection = getComputerChoice()
            playRound(humanSelection,computerSelection)
            i=i-1
        case 1:
            humanSelection = getHumanChoice()
            computerSelection = getComputerChoice()
            playRound(humanSelection,computerSelection)
            i=i-1
            break;                
    }
}
playGame()

