const human_score_display = document.querySelector(".human_score");
const machine_score_display = document.querySelector(".machine_score");
const announcement = document.querySelector(".announcement");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const machineChoice = getComputerChoice();
    let humanChoice = "";
    switch (button.textContent) {
      case "Rock":
        humanChoice = "Rock";
        break;
      case "Scissors":
        humanChoice = "Scissors";
        break;
      case "Paper":
        humanChoice = "Paper";
        break;
      case "Play Again":
        humanChoice = "Play Again";
        break;
      default:
        console.log("Invalid");
    }
    if (humanChoice != "Play Again") {
      let result = playRound(humanChoice, machineChoice);
      if (result.includes("You Win!")) {
        humanScore++;
        human_score_display.textContent = humanScore;
      } else if (result.includes("You Lose!")) {
        machineScore++;
        machine_score_display.textContent = machineScore;
      }

      if (humanScore == 5 || machineScore == 5) {
        if (humanScore > machineScore) {
          result = "You Win!";
        } else {
          result = "You Lose";
        }
        buttons.forEach((button) => {
          if (button.textContent != "Play Again") {
            button.disabled = true;
          }
        });
      }
      announcement.textContent = result;
    }
    else {
      announcement.textContent = "";
      humanScore = 0;
      machineScore = 0;
      human_score_display.textContent = humanScore;
      machine_score_display.textContent = machineScore;
      buttons.forEach((button) => {
        if (button.textContent != "Play Again") {
          button.disabled = false;
        }
      })
    }
  });
});

let humanScore = 0;
let machineScore = 0;

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
  if (humanChoice == "Invalid Choice") {
    return "Invalid input";
  }
  return outcomes[humanChoice][machineChoice];
}
