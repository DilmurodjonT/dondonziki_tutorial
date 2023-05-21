const choices = document.querySelectorAll(".choice"),
  score = document.querySelector("#score"),
  modal = document.querySelector(".modal"),
  result = document.querySelector("#result"),
  restart = document.querySelector("#restart"),
  scoreBoard = {
    player: 0,
    computer: 0,
    draw: 0,
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
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreBoard.player++;
    result.innerHTML = `
    <h1 class="text-win">You win</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <string>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</string></p>
    `;
  } else if (winner === "computer") {
    scoreBoard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">You lose</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <string>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</string></p>
    `;
  } else {
    restart.innerHTML = `
    <h1>It's A Draw</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer Chose <string>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</string></p>
    `;
  }
  score.innerHTML = `
  <p> Player: ${scoreBoard.player}</p>
  <p> Computer: ${scoreBoard.computer}</p>
  `;
  modal.style.display = "block";
}

// RestartGame
function restartGame() {}

// ClearModal
function clearModal() {}

// Event listenears
