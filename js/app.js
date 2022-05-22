const buttons = document.querySelectorAll(".btn");
const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const roundResult = document.querySelector(".round-result");
const gameResult = document.querySelector(".game-result");

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

function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  let randIndex = Math.floor(Math.random() * choices.length);
  return choices[randIndex];
}

function displayChoices(playerSelection, computerSelection) {
  playerChoice.textContent = playerSelection;
  computerChoice.textContent = computerSelection;
}

function displayRoundResult(message, playerScore, computerScore) {
  roundResult.textContent = message;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function displayGameResult(message) {
  gameResult.textContent = message;
  endGame();
}

function playRound(playerSelection, computerSelection) {
  let message = "";
  if (playerSelection === computerSelection) {
    message = `Draw! You both chose ${playerSelection}`;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    message = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
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

function endGame() {
  showResetButton();
  buttons.forEach((button) => (button.disabled = true));
}

function showResetButton() {
  const container = document.querySelector(".container");
  const resetButton = document.createElement("button");
  resetButton.textContent = "Play again";
  resetButton.classList.add("reset-btn");
  container.append(resetButton);
  resetButton.addEventListener("click", () => {
    resetGame();
  });
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  buttons.forEach((button) => (button.disabled = false));
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  playerChoice.textContent = "";
  computerChoice.textContent = "";
  roundResult.textContent = "";
  gameResult.textContent = "";
  const resetButton = document.querySelector(".reset-btn");
  resetButton.remove();
}
