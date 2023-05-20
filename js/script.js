const choices = document.querySelectorAll(".choice"),
  score = document.querySelector("#score"),
  modal = document.querySelector(".modal"),
  result = document.querySelector("#result"),
  restart = document.querySelector("#restart"),
  scoreBoard = {
    player: 0,
    computer: 0,
  };

// Play game
function play() {
  restart.style.display = "inline-block";
  const computerChoice = getComputerChoice();
}

// GetComputerChoice
function getComputerChoice() {
  const rand = Math.random() * 10;
  if (rand < 3) {
    return "rock";
  } else if (rand <= 6) {
    return "paper";
  } else {
    return "scissors";
  }
}

// GetWinner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

// ShowWinner
function showWinner() {}

// RestartGame
function restartGame() {}

// ClearModal
function clearModal() {}

// Event listenears
