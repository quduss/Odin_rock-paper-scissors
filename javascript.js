function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}
console.log(getComputerChoice())
function playGame(playerSelection, computerSelection) {
    const playerToLower = playerSelection.lowerCase();
    const computerToLower = computerSelection.lowerCase();
}