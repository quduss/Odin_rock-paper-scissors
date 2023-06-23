function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
//console.log(getComputerChoice())
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    const playerToLower = playerSelection.toLowerCase();

    if (playerToLower === 'rock' && computerSelection === 'paper') {
        result.textContent = 'You Lose! Paper beats Rock';
        computerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else if (playerToLower === 'rock' && computerSelection === 'scissors') {
        result.textContent = 'You Win! Rock beats Scissors';
        playerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else if (playerToLower === 'paper' && computerSelection === 'rock') {
        result.textContent = 'You Win! Paper beats Rock';
        playerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else if (playerToLower === 'paper' && computerSelection === 'scissors') {
        result.textContent = 'You Lose! Scissors beats Paper';
        computerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else if (playerToLower === 'scissors' && computerSelection === 'rock') {
        result.textContent = 'You Lose! Rock beats Scissors';
        computerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else if (playerToLower === 'scissors' && computerSelection === 'paper') {
        result.textContent = 'You Win! Scissors beats Paper';
        playerScore++;
        score.textContent = `${playerScore} - ${computerScore}`;
    }
    else {
        result.textContent = 'You tied!';
        score.textContent = `${playerScore} - ${computerScore}`;
    }
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const score = document.querySelector('.score');

   
buttons.forEach(button => button.addEventListener('click', () => playRound(button.textContent)));
