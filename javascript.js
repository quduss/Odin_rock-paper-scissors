function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}