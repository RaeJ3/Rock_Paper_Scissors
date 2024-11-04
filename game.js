let rounds = 0;

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




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    

    function playRound(humanChoice, computerChoice) {
    rounds++;
    
    
    
    
    console.log("AI choice: " + computerChoice);



    switch(humanChoice) {
        case computerChoice: 
            console.log("You draw.");
            break;
        case "rock":
            if(computerChoice === "paper") {
                console.log('You lose! Paper beats Rock!')
                computerScore++;
            } else if (computerChoice === "scissors") {
                console.log('You win! Rock beats Scissors!');
                humanScore++;
            };
            break;
        case "paper":
            if(computerChoice === "scissors") {
                console.log('You lose! Scissors beats Paper!');
                computerScore++;
            } else if (computerChoice === "rock") {
                console.log('You win! Paper beats Rock!');
                humanScore++;
            }
            break;
        case "scissors":
            if(computerChoice === "rock") {
                console.log('You lose! Rock beats Scissors!');
                computerScore++;
            } else if (computerChoice === "paper") {
                console.log('You win! Scissors beats paper!');
                humanScore++;
            }
            break;
    }
    

}

    for(let i=1;i<5;i++) {
        playRound(getHumanChoice(), getComputerChoice());
            // console.log(computerScore > humanScore ? "You Lose! " + humanScore + " : " + computerScore : "You Win! " + humanScore + " : " + computerScore); 
            console.log("Your Score: " + humanScore);
            console.log("AI Score: " + computerScore);
            console.log(rounds);
            switch (rounds) {
                case rounds == 5:
                    if(humanScore == computerScore) {
                        console.log("You Draw! Final Score: " + humanScore + " : " + computerScore);
                    } else if (humanScore > computerScore) {
                        console.log("You Win! Final Score: " + humanScore + " : " + computerScore);
                    } else if (humanScore < computerScore) {
                        console.log("You Lose! Final Score: " + humanScore + " : " + computerScore)
                    }
                    break;
            }
            
        }
        // else if (computerScore = humanScore) {
        //     console.log("You Draw! Final Score: " + humanScore + " : " + computerScore);
        // }
    }



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playGame());