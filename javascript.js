function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
//console.log(getComputerChoice())
function playRound(playerSelection, computerSelection) {
    const playerToLower = playerSelection.toLowerCase();
    const computerToLower = computerSelection.toLowerCase();
    if (playerToLower === 'rock' && computerToLower === 'paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerToLower === 'rock' && computerToLower === 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if (playerToLower === 'paper' && computerToLower === 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if (playerToLower === 'paper' && computerToLower === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerToLower === 'scissors' && computerToLower === 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerToLower === 'scissors' && computerToLower === 'paper') {
        return 'You Win! Scissors beats Paper';
    }
    else {
        return 'You tied!';
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
        ) {computerScore++;}
        else if (
            a === 'You Win! Rock beats Scissors'
            || a === 'You Win! Paper beats Rock'
            || a === 'You Win! Scissors beats Paper'
        ) {playerScore++;}
    }
    if (playerScore > computerScore) {console.log("You're the Winner!")}
    else if (computerScore > playerScore) {console.log("You're the Loser!")}
    else {console.log("You Tied!")}
}