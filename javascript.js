function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3);;
  if (randomValue === 0) {
    console.log("0");
    console.log("rock")
  }
  else if (randomValue === 1 ) {
    console.log("1");
    console.log("paper")
  }
  else {
    console.log("2")
    console.log("scissors")
  }
}

getComputerChoice()