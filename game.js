const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const results = document.createElement('div');
const scores = document.createElement('div');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p');
const displayBtns = document.createElement('div');
const body = document.querySelector('body');

rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";
playerScore.textContent = "Your score: " + 0;
computerScore.textContent = "Computer score:" + 0;

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



// const humanSelection = function getHumanChoice(){
//     let answer = prompt("rock, paper, or scissors?").toLowerCase();
//     if (answer === 'rock' || answer === "paper" || answer === "scissors") {
//         return answer;
//     } else {
//          return answer = prompt("rock, paper, or scissors?").toLowerCase();
//     }
// }


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
    
    //results.textContent = "Computer choice: " + computerChoice;

    switch(humanChoice) {
        case computerChoice: 
            results.textContent = "You draw.";
            break;
        case "rock":
            if(computerChoice === "paper") {
                results.textContent ='You lose! Paper beats Rock!';
                computerScore++;
                computerScore.textContent += computerScore;
            } else if (computerChoice === "scissors") {
                results.textContent = 'You win! Rock beats Scissors!';
                humanScore++;
            };
            break;
        case "paper":
            if(computerChoice === "scissors") {
                results.textContent = 'You lose! Scissors beats Paper!';
                computerScore++;
            } else if (computerChoice === "rock") {
                results.textContent = 'You win! Paper beats Rock!';
                humanScore++;
            }
            break;
        case "scissors":
            if(computerChoice === "rock") {
                results.textContent = 'You lose! Rock beats Scissors!';
                computerScore++;
            } else if (computerChoice === "paper") {
                results.textContent = 'You win! Scissors beats paper!';
                humanScore++;
            }
            break;

            playerScore.textContent = "Your Score: " + humanScore;
            computerScore.textContent = "Computer Score: " + computerScore;
                if(humanScore == computerScore) {
                    results.textContent = "You Draw! Final Score: " + humanScore + " : " + computerScore;
                } else if (humanScore > computerScore) {
                    results.textContent = "You Win! Final Score: " + humanScore + " : " + computerScore;
                } else if (humanScore < computerScore) {
                    results.textContent = "You Lose! Final Score: " + humanScore + " : " + computerScore;
                }
    }
    

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

        playerScore.textContent += playerScore;
        computerScore.textContent += computerScore;
}
console.log(playGame());