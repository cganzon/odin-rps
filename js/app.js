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