console.log("Hello from console!");

function computerPlay() {
  choices = ["rock", "paper", "scissors"];

  return String(choices[Math.floor(Math.random() * 3)]);
}

// console.log(computerPlay())

function playRound(playerSection, computerSection) {
  if (playerSection === computerSection) {
    return `Draw! ${playerSection} and ${computerSection} are the same`;
  } else if (
    (playerSection === "rock" && computerSection === "scissors") ||
    (playerSection === "paper" && computerSection === "rock") ||
    (playerSection === "scissors" && computerSection === "paper")
  ) {
    return `You Win! ${playerSection} beats ${computerSection}`;
  } else {
    return `You Lose! ${computerSection} beats ${playerSection}`;
  }
}

console.log(
  playRound(prompt("Enter your move: ").toLowerCase(), computerPlay())
);
