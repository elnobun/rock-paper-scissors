let playerScore = 0;
let computerScore = 0;

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Create function call `computerPlay()`
function computerPlay() {
  // Create variable with an array of rock, paper, scissors
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.trunc(Math.random() * choices.length)];
}

// Create function call `playRounds()`
function playRounds(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // Check for a tie
  if (player === computer) {
    return `It is a tie`;
  }

  // Check all use cases.
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return `You Win! ${capitalize(player)} beats ${capitalize(computer)}`;
  } else {
    return `You lose! ${capitalize(computer)} beats ${capitalize(player)}`;
  }
}

// Create function call `game()`
function game() {
  // Keep track of player and computer score
  return playRounds("rock", computerPlay());
}
console.log(game());
