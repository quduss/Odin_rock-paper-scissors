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
        div.textContent = 'You Lose! Paper beats Rock';
        computerScore++;
        
    }
    else if (playerToLower === 'rock' && computerSelection === 'scissors') {
        div.textContent = 'You Win! Rock beats Scissors';
        playerScore++;
    }
    else if (playerToLower === 'paper' && computerSelection === 'rock') {
        div.textContent = 'You Win! Paper beats Rock';
        playerScore++;
    }
    else if (playerToLower === 'paper' && computerSelection === 'scissors') {
        div.textContent = 'You Lose! Scissors beats Paper';
        computerScore++;
    }
    else if (playerToLower === 'scissors' && computerSelection === 'rock') {
        div.textContent = 'You Lose! Rock beats Scissors';
        computerScore++;
    }
    else if (playerToLower === 'scissors' && computerSelection === 'paper') {
        div.textContent = 'You Win! Scissors beats Paper';
        playerScore++;
    }
    else {
        div.textContent = 'You tied!';
    }
}


let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
   
buttons.forEach(button => button.addEventListener('click', () => playRound(button.textContent)));
