// Function that generates a random computer choice from the choices array
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    let randIndex = Math.floor(Math.random() * choices.length);
    return choices[randIndex];
}