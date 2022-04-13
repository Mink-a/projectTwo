console.log("Hello from console!");

function computerPlay() {
  choices = ["rock", "paper", "scissors"];

  return String(choices[Math.floor(Math.random() * 3)]);
}

// console.log(computerPlay())

var gamesYouWin = 0;
var gamesYouLose = 0;

function playRound(playerSection, computerSection) {
  if (playerSection === computerSection) {
    console.log(
      "You Win " + gamesYouWin + " : " + "Computer Win " + gamesYouLose
    );
    return `Draw! ${playerSection} and ${computerSection} are the same`;
  } else if (
    (playerSection === "rock" && computerSection === "scissors") ||
    (playerSection === "paper" && computerSection === "rock") ||
    (playerSection === "scissors" && computerSection === "paper")
  ) {
    gamesYouWin++;
    console.log(
      "You Win " + gamesYouWin + " : " + "Computer Win " + gamesYouLose
    );
    return `You Win! ${playerSection} beats ${computerSection}`;
  } else {
    gamesYouLose++;
    console.log(
      "You Win " + gamesYouWin + " : " + "Computer Win " + gamesYouLose
    );
    return `You Lose! ${computerSection} beats ${playerSection}`;
  }
}

// console.log(
//   playRound(prompt("Enter your move: ").toLowerCase(), computerPlay())
// );

function game() {
  for (let games = 0; games < 5; games++) {
    console.log(
      playRound(prompt("Enter your move: ").toLowerCase(), computerPlay())
    );
  }

  if (gamesYouWin === gamesYouLose) {
    console.log("Draw!!!");
  } else if (gamesYouWin > gamesYouLose) {
    console.log("You Win the whole game!");
  } else {
    console.log("You Lose Kid!");
  }
}

console.log(game());
