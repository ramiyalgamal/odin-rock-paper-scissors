// Function to get the computer choice

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);
  if (randomValue === 0) {
    // console.log("0");
    return "rock";
  }
  else if (randomValue === 1 ) {
    console.log("1");
    return "paper";
  }
  else {
    // console.log("2")
    return "scissors";
  }
}

// Function to get the human choice
function getHumanChoice() {
  humanChoice = (prompt("Select “rock”, “paper” or “scissors”:")).toLowerCase();
  return humanChoice
}


// Play a round
function playRound(humanChoice, computerChoice){
  if (humanChoice == "rock") {
    if (computerChoice == "paper"){
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore += 1;
    } else if (computerChoice == "scissors") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`its a draw! Computer chose ${computerChoice}`);
    }
  } 
  else if (humanChoice == "paper") {
    if (computerChoice == "paper"){
      console.log(`its a draw! Computer chose ${computerChoice}`);
    } else if (computerChoice == "scissors") {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore += 1;
    } else {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    }
  }
  else {
    if (computerChoice == "rock"){
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore += 1;
    } else if (computerChoice == "paper") {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore += 1;
    } else {
      console.log(`its a draw! Computer chose ${computerChoice}`);
    }
  }
}



function playGame() {
  playRound(getHumanChoice(), getComputerChoice())
  console.log(`Human Score: ${humanScore}`)
  console.log(`Computer Score: ${computerScore}`)
}

let games = 5;

while (games > 0) {
  games -= 1;
  playGame()
}


if (humanScore > computerScore) {
  console.log(`Congrats, you won! Your score is: ${humanScore}, computer score ${computerScore}`)
}
else if (humanScore < computerScore) {
  console.log(`You lost! Your score is: ${humanScore}, computer score ${computerScore}`)
}
else {
  console.log(`its a draw! Your score is: ${humanScore}, computer score ${computerScore}`)
}