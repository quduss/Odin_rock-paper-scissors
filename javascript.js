function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
console.log(getComputerChoice())
function playGame(playerSelection, computerSelection) {
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