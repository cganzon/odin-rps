// Function that generates a random computer choice from the choices array
function computerPlay() {
    // Create an array with the three choices for rock paper scissors
    const choices = ['rock', 'paper', 'scissors'];

    // Generate a random index based on the length of the choices array
    // In this case, the number will be between 0 and 3 (not including 3)
    // Therefore, the number will be between 0 and 2 (which is what we want since arrays start from 0)
    let randIndex = Math.floor(Math.random() * choices.length);

    // Use the generated random index to return a random item in the choices array
    return choices[randIndex];
}

// Function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case insensitive by converting to lowercase
    let playerChoice = playerSelection.toLowerCase();

    // If there is a draw
    if(playerChoice === computerSelection) {
        return `Draw! You both chose ${playerChoice}`;
    }
    // If the player wins
    else if(playerChoice === 'rock' && computerSelection === 'scissors' || playerChoice === 'scissors' && computerSelection === 'paper' || playerChoice === 'paper' && computerSelection === 'rock') {
        return `You win! ${playerChoice} beats ${computerSelection}`;
    }
    // If the player loses
    else {
        return `You lose! ${computerSelection} beats ${playerChoice}`;
    }
}