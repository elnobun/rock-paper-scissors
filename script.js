// Create variable with an array of rock, paper, scissors
const choices = ["rock", "paper", "scissors"];

// Create function call `computerPlay()`
function computerPlay() {
  // Store random choice in a new variable
  const randomChoice = [...choices];
  return randomChoice[Math.floor(Math.random() * randomChoice.length)];
}

// Create function call `playRounds()`
function playRounds(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice === "rock" && computerChoice === "scissors") {
    return `You Win! Rock beats Scissors`;
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return `You Lose! Paper beats Rock`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return `You Win! Scissors beats Paper`;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return `You Lose! Rock beats Scissors`;
  } else {
    return "It is a draw";
  }
}

console.log(playRounds("rock", computerPlay()));
