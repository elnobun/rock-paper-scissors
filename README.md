## Rock Paper Scissors Game

### Game Description:
It is a simple hand game with many names and variations. 
It is played around the world and is commonly used as a way of 
coming to decision.

### Game Rules:
The rules require that competing players use one hand to form one 
of three shapes at an agreed-upon time. The person that plays the 
strongest “object” is the winner of the game.

### Understanding the Game
- Game is played by 2. In this case, You `vs` a Computer.
- Moves are made the same time, and not turn by turn.
- Moves can be made more than once to fool opponent.
- Each object wins against one shape:
    <ul>
        <li>Rock beats Scissors</li>
        <li>Paper beats Rock</li>
        <li>Scissors beats Paper</li>
    </ul>
- Game has 3 outcomes:
    <ul>
        <li>Player one wins</li>
        <li>Player two wins</li>
        <li>A draw</li>
    </ul>
- It is a draw if both players have same score.

### Plan
- Write a function called `computerPlay()` that will `randomly` return
  either *Rock*, *Paper* or *Scissors*.


- Write a function `playRounds()` that plays a single round of the game,
  which takes two parameters; `playerSelection` and `computerSelection`
    - Return a string that declares the winner of the round like so:
      "You Lose! Paper beats Rock"
    - Make both user and computer input case-sensitive.


- Write a new function called `game()`. Use previous function inside
  it, to play a game of 5 that keeps score and reports a winner or loser
  at the end.

### Algorithm
> Player Computer
- Define function call `computerPlay()`
- Create `variable` with the name`choice`.
- The choice variable takes an `array` of rock, paper, scissors.
- Store `random` choice in a new variable with the name *randomChoice*
- Return this choice with first letter capitalized.  
