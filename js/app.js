const buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

buttons.forEach(button => {
  button.addEventListener("click", e => {
    let playerSelection =  e.target.getAttribute("data-choice");
    let computerSelection = computerPlay();
    console.log(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
  })
})

// Function that generates a random computer choice from the choices array
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

// Function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  // If there is a draw
  if (playerSelection === computerSelection) {
    console.log(`Draw! You both chose ${playerSelection}`);
  }
  // If the player wins
  else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  }
  // If the player loses
  else {
    computerScore++
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
  console.log(`Player: ${playerScore}`)
  console.log(`Computer: ${computerScore}`);
  checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
  if(playerScore === winningScore) {
    console.log('You won the game!');
  } else if(computerScore === winningScore) {
    console.log('You lost the game!')
  }
}