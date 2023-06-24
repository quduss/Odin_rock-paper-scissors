function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
//console.log(getComputerChoice())
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    const playerToLower = playerSelection.toLowerCase();
    winner.textContent = '';



    if (playerToLower === 'rock' && computerSelection === 'paper') {
        result.textContent = 'You Lose! Paper beats Rock';
        computerScore++;
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerToLower === 'rock' && computerSelection === 'scissors') {
        result.textContent = 'You Win! Rock beats Scissors';
        playerScore++;
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerToLower === 'paper' && computerSelection === 'rock') {
        result.textContent = 'You Win! Paper beats Rock';
        playerScore++;
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerToLower === 'paper' && computerSelection === 'scissors') {
        result.textContent = 'You Lose! Scissors beats Paper';
        computerScore++;
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerToLower === 'scissors' && computerSelection === 'rock') {
        result.textContent = 'You Lose! Rock beats Scissors';
        computerScore++;
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerToLower === 'scissors' && computerSelection === 'paper') {
        result.textContent = 'You Win! Scissors beats Paper';
        playerScore++;
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerToLower === computerSelection) {
        result.textContent = 'You tied!';
        score.textContent = `You ${playerScore} - Computer ${computerScore}`;
    }
    if (playerScore === 5) {
        winner.textContent = 'You reached 5 points! You won the game!'
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5) {
        winner.textContent = 'You lost! The Computer reached 5 points first but you can try again.'
        playerScore = 0;
        computerScore = 0;
    }
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const result = document.querySelector('.result');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');

   
buttons.forEach(button => button.addEventListener('click', () => playRound(button.textContent)));
