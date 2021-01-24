// Create function call `computerPlay()`
function computerPlay() {
    // Create variable with an array of rock, paper, scissors
    const choices = ["rock", "paper", "scissors"];
    // Store random choice in a new variable
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    // Return the random choice. Ensure the first letter is uppercase.
    return randomChoice.charAt(0).toUpperCase() + randomChoice.slice(1);
}
console.log(computerPlay());
