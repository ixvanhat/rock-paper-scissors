let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const options = ["rock", "paper", "scissors"];
    let random = options[Math.floor(Math.random() * options.length)];
    return random;
}

function playRound(playerSelection, computerSelection) {
  var playerSelection;
  var computerSelection = getComputerChoice();
  
  pSelect.textContent = `
  Player selected: ${playerSelection}
  `;
  cSelect.textContent = `
  Computer selected: ${computerSelection}
  `;
  roundWin.textContent = `
  ${roundWin}
  `;
  results.textContent = "";
      
  if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      roundWin.textContent = "You win! Rock beats scissors!";
  }
  if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore += 1;
      roundWin.textContent = "You lose! Paper beats rock!";
  }   
  if (playerSelection === computerSelection) 
      roundWin.textContent = "It's a draw!";
    
  if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore += 1;
      roundWin.textContent = "You lose! Scissors beats paper!";
  }  
  if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      roundWin.textContent = "You win! Paper beats rock";
  }
  if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore += 1;
      roundWin.textContent = "You win! Scissors beats paper!";
  }
  if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore += 1;
      roundWin.textContent = "You lose! Rock beats scissors!";
  }
  if (playerScore === 5 && computerScore < 5) {
    results.textContent = `
    Game finished!
    Congratulations, you win by ${playerScore} - ${computerScore}!`;
  }
  if (computerScore === 5 && playerScore < 5) {
    results.textContent = `
    Game finished! 
    You lose! Computer won by ${computerScore} - ${playerScore}!`;
  } 
 if (playerScore === 5 || computerScore === 5) {
     playerScore = 0;
     computerScore = 0;
     pSelect.textContent = "";
     cSelect.textContent = "";
     roundWin.textContent = "";
     
  }
}


const pSelect = document.body.querySelector("#game>.pSelect");
const cSelect = document.body.querySelector("#game>.cSelect"); 
const roundWin = document.body.querySelector("#game>.roundWin");
const results = document.body.querySelector("#game>.results");
  
const btn1 = document.querySelector('#buttons>.btn1');
btn1.addEventListener('click', () => {
  playRound("rock");
});

const btn2 = document.querySelector("#buttons>.btn2");
btn2.addEventListener('click', () => {
  playRound("paper");
});

const btn3 = document.querySelector("#buttons>.btn3");
btn3.addEventListener('click', () => {
  playRound("scissors");
});

