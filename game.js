function playGame() {
  let humanScore = 0;
  let machineScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const machineChoice = getComputerChoice();
    let result = playRound(humanChoice, machineChoice);
    console.log(result);
    if (result.includes("You Win!")) {
      humanScore++;
    } else if (result.includes("You Lose!")) {
      machineScore++;
    } else {
      humanScore++;
      machineScore++;
    }
  }

  if (humanScore > machineScore) {
    return "Human wins with a score of " + humanScore;
  } else if (humanScore < machineScore) {
    return "Machine wins with a score of " + machineScore;
  }
  return (
    "Tie Game! " +
    "Human Score: " +
    humanScore +
    " Machine Score " +
    machineScore
  );
}

function getComputerChoice() {
  random = Math.random() * 3;
  if (random < 1) {
    return "Rock";
  } else if (random < 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What is your choice?");
  switch (choice.toLowerCase()) {
    case "rock":
      return "Rock";
    case "paper":
      return "Paper";
    case "scissors":
      return "Scissors";
    default:
      return "Invalid Choice";
  }
}

function playRound(humanChoice, machineChoice) {
  const outcomes = {
    Rock: {
      Rock: "Tie! Rock ties Rock",
      Paper: "You Lose! Paper beats Rock",
      Scissors: "You Win! Rock beats Scissors",
    },
    Paper: {
      Rock: "You Win! Paper beats Rock",
      Paper: "Tie! Paper ties Paper",
      Scissors: "You Lose! Scissors beats Paper",
    },
    Scissors: {
      Rock: "You Lose! Rock beats Scissors",
      Paper: "You Win! Scissors beats Paper",
      Scissors: "Tie! Scissors ties Scissors",
    },
  };

  return outcomes[humanChoice][machineChoice] || "Invalid input";
}

console.log(playGame());
