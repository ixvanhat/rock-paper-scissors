let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
  var playerSelection;
  var computerSelection = getComputerChoice().toLowerCase();
      
  do {
  playerSelection = prompt("Choose one of the following: Rock, Paper or Scissors?").toLowerCase();
 console.log("Player selected: " + playerSelection);
 console.log("Computer selected: " + computerSelection);
}
while ((playerSelection != "rock") && (playerSelection != "paper") && (playerSelection != "scissors"));
  
if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      return "You win! Rock beats scissors!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore += 1;
      return "You Lose! Paper beats rock!";
  }   
  if (playerSelection === computerSelection) 
      return "It's a draw!";
    
  if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore += 1;
      return "You Lose! Scissors beats paper!";
  }  
  if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      return "You Win! Paper beats rock";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore += 1;
      return "You win! Scissors beats paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      return "You Lose! Rock beats scissors!";
  } 
 
}

function game() {
  for (let i = 0; i < 5; i++) {
  console.log(playRound());
  console.log("Scores: player " + playerScore + "-" + computerScore + " computer");
  }
  console.log("Game finished!");
  if (playerScore > computerScore) {
    console.log("Congratulations, you win by " + playerScore + "-" + computerScore + "!");
  } else if (playerScore < computerScore) {
    console.log("You lose! Computer won by " + computerScore + "-" + playerScore + "!");
  } else {
    console.log("It's a draw " + playerScore + "-" + computerScore +"!");
  }
}

game();

