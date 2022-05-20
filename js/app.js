const buttons = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.getAttribute("data-choice");
    let computerSelection = computerPlay();
    displayChoices(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
  });
});

// Function that generates a random computer choice from the choices array
function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function displayChoices(playerSelection, computerSelection) {
  const playerChoice = document.querySelector(".player-choice");
  playerChoice.textContent = playerSelection;
  const computerChoice = document.querySelector(".computer-choice");
  computerChoice.textContent = computerSelection;
}

function displayRoundResult(message, playerScore, computerScore) {
  const roundResult = document.querySelector(".round-result");
  const playerScoreDisplay = document.querySelector(".player-score");
  const computerScoreDisplay = document.querySelector(".computer-score");
  roundResult.textContent = message;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function displayGameResult(message) {
  const gameResult = document.querySelector(".game-result");
  gameResult.textContent = message;
}

// Function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  let message = "";
  // If there is a draw
  if (playerSelection === computerSelection) {
    message = `Draw! You both chose ${playerSelection}`;
  }
  // If the player wins
  else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    message = `You win! ${playerSelection} beats ${computerSelection}`;
  }
  // If the player loses
  else {
    computerScore++;
    message = `You lose! ${computerSelection} beats ${playerSelection}`;
  }
  displayRoundResult(message, playerScore, computerScore);
  checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
  let message = "";
  if (playerScore === winningScore) {
    message = "You won the game!";
    displayGameResult(message);
  } else if (computerScore === winningScore) {
    message = "You lost the game!";
    displayGameResult(message);
  }
}
