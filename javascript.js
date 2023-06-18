function getComputerChoice() {
    const arr = ['rock', 'paper', 'scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
//console.log(getComputerChoice())
function playRound(playerSelection, computerSelection) {
    const playerToLower = playerSelection.toLowerCase();

    if (playerToLower === 'rock' && computerSelection === 'paper') {
        div.textContent = 'You Lose! Paper beats Rock';
    }
    else if (playerToLower === 'rock' && computerSelection === 'scissors') {
        div.textContent = 'You Win! Rock beats Scissors';
    }
    else if (playerToLower === 'paper' && computerSelection === 'rock') {
        div.textContent = 'You Win! Paper beats Rock';
    }
    else if (playerToLower === 'paper' && computerSelection === 'scissors') {
        div.textContent = 'You Lose! Scissors beats Paper';
    }
    else if (playerToLower === 'scissors' && computerSelection === 'rock') {
        div.textContent = 'You Lose! Rock beats Scissors';
    }
    else if (playerToLower === 'scissors' && computerSelection === 'paper') {
        div.textContent = 'You Win! Scissors beats Paper';
    }
    else {
        div.textContent = 'You tied!';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Your selection');
        let computerSelection = getComputerChoice();
        let a = playRound(playerSelection, computerSelection);
        console.log(a);
        if (
            a === 'You Lose! Paper beats Rock'
            || a === 'You Lose! Scissors beats Paper'
            || a === 'You Lose! Rock beats Scissors'
        ) computerScore++;
        else if (
            a === 'You Win! Rock beats Scissors'
            || a === 'You Win! Paper beats Rock'
            || a === 'You Win! Scissors beats Paper'
        ) playerScore++;
    }
    if (playerScore > computerScore) console.log("You're the Winner!")
    else if (computerScore > playerScore) console.log("You're the Loser!")
    else console.log("You both drew the game!")
}
let computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
buttons.forEach(button => button.addEventListener('click', () => playRound(button.textContent, computerSelection)));