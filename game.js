const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const results = document.createElement('div');
const scores = document.createElement('div');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const displayBtns = document.createElement('div');
const body = document.querySelector('body');

let playerPoints = 0;
let computerPoints = 0;

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
playerScore.textContent = "Your score: " + playerPoints;
computerScore.textContent = "Computer score: " + computerPoints;

body.appendChild(scores);
body.appendChild(displayBtns);
body.appendChild(results);
displayBtns.appendChild(rockBtn);
displayBtns.appendChild(paperBtn);
displayBtns.appendChild(scissorsBtn);
scores.appendChild(playerScore);
scores.appendChild(computerScore);





function getComputerChoice() {
    let randomChoiceForComputer = Math.random();
    if (randomChoiceForComputer < .33) {
        return "rock";
    } else if (.66 > randomChoiceForComputer >= .33) {
        return "paper";
    } else {
        return "scissors";
    }
}



// const playerSelection = function getplayerChoice(){
//     let answer = prompt("rock, paper, or scissors?").toLowerCase();
//     if (answer === 'rock' || answer === "paper" || answer === "scissors") {
//         return answer;
//     } else {
//          return answer = prompt("rock, paper, or scissors?").toLowerCase();
//     }
// }


function playGame() {

    function playRound(playerChoice, computerChoice) {

    switch(playerChoice) {
        case computerChoice: 
            results.textContent = "You draw.";
            break;
        case "rock":
            if(computerChoice === "paper") {
                results.textContent ='You lose! Paper beats Rock!';
                computerPoints++;
            } else if (computerChoice === "scissors") {
                results.textContent = 'You win! Rock beats Scissors!';
                playerPoints++;
            };
            break;
        case "paper":
            if(computerChoice === "scissors") {
                results.textContent = 'You lose! Scissors beats Paper!';
                computerPoints++;
            } else if (computerChoice === "rock") {
                results.textContent = 'You win! Paper beats Rock!';
                playerPoints++;
            }
            break;
        case "scissors":
            if(computerChoice === "rock") {
                results.textContent = 'You lose! Rock beats Scissors!';
                computerPoints++;
            } else if (computerChoice === "paper") {
                results.textContent = 'You win! Scissors beats paper!';
                playerPoints++;
            }
            break;

    }


    playerScore.textContent = "Your score: " + playerPoints;
    computerScore.textContent = "Computer score: " + computerPoints;

}

        rockBtn.addEventListener('click', () => {
            playRound('rock', getComputerChoice());
        })
        paperBtn.addEventListener('click', () => {
            playRound('paper', getComputerChoice())
        })
        scissorsBtn.addEventListener('click', () => {
            playRound('scissors', getComputerChoice())
        })

        //playerScore.textContent += playerPoint;
        //computerScore.textContent += computerPoint;

        // if(playerScore == computerScore) {
        //     results.textContent = "You Draw! Final Score: " + playerScore + " : " + computerScore;
        // } else if (playerScore > computerScore) {
        //     results.textContent = "You Win! Final Score: " + playerScore + " : " + computerScore;
        // } else if (playerScore < computerScore) {
        //     results.textContent = "You Lose! Final Score: " + playerScore + " : " + computerScore;
        // }

        

}
console.log(playGame());