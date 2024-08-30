let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let a = Math.random();
    if (a < .33) {
        return "rock";
    } else if (.66 > a >= .33) {
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    let answer = prompt("rock, paper, or scissors?").toLowerCase();
    if (answer === 'rock' || answer === "paper" || answer === "scissors") {
        return answer;
    } else {
         return answer = prompt("rock, paper, or scissors?").toLowerCase();
    }
}


function playRound(humanSelection, computerSelection) {
    switch(humanSelection) {
        case humanSelection === computerSelection: 
            console.log("You draw.");
            break;
        case humanSelection === "rock" && computerSelection === "paper":
            console.log('You lose! Paper beats Rock!');
            computerScore++;
            break;
        case humanSelection === "rock" && computerSelection === "scissors":
            console.log('You win! Rock beats Scissors!');
            humanScore++;
            break;
        case humanSelection === "paper" && computerSelection === "scissors":
            console.log('You lose! Scissors beats Paper!');
            computerScore++;
            break;
        case humanSelection === "paper" && computerSelection === "rock":
            console.log('You win! Paper beats Rock!');
            humanScore++;
            break;
        case humanSelection === "scissors" && computerSelection === "rock":
            console.log('You lose! Rock beats Scissors!');
            computerScore++;
            break;
        case humanSelection === "scissors" && computerSelection === "paper":
            console.log('You win! Scissors beats paper!');
            humanScore++;
            break;
    }
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("Your Score: " + humanScore);
console.log("AI Score: " + computerScore);