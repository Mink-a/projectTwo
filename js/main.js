console.log("Hello from console!");

function computerPlay() {
  choices = ["rock", "paper", "scissors"];

  return String(choices[Math.floor(Math.random() * 3)]);
}

// console.log(computerPlay())

var yourScore = 0;
var computerScore = 0;

function playRound(playerSection, computerSection) {
  if (playerSection === computerSection) {
    document.getElementById("p-score").textContent = yourScore;
    document.getElementById("c-score").textContent = computerScore;

    console.log(
      "You Win " + yourScore + " : " + "Computer Win " + computerScore
    );
    return `Draw! ${playerSection} and ${computerSection} are the same`;
  } else if (
    (playerSection === "rock" && computerSection === "scissors") ||
    (playerSection === "paper" && computerSection === "rock") ||
    (playerSection === "scissors" && computerSection === "paper")
  ) {
    yourScore++;
    document.getElementById("p-score").textContent = yourScore;
    document.getElementById("c-score").textContent = computerScore;
    console.log(
      "You Win " + yourScore + " : " + "Computer Win " + computerScore
    );
    return `You Win! ${playerSection} beats ${computerSection}`;
  } else {
    computerScore++;
    document.getElementById("p-score").textContent = yourScore;
    document.getElementById("c-score").textContent = computerScore;
    console.log(
      "You Win " + yourScore + " : " + "Computer Win " + computerScore
    );
    return `You Lose! ${computerSection} beats ${playerSection}`;
  }
}

// console.log(
//   playRound(prompt("Enter your move: ").toLowerCase(), computerPlay())
// );

const buttons = document.querySelectorAll(".selection button");

// Random rock paper scissor for the computer and clicked ones for the player

function game() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let clickedBtn = e.target.id;

      console.log(playRound(clickedBtn, computerPlay()));
      if (checkWinner()) {
        yourScore = computerScore = 0;
        updateScore();
      }
    });
  });
}

function updateScore() {
  document.getElementById("p-score").textContent = yourScore;
  document.getElementById("c-score").textContent = computerScore;
}

function checkWinner() {
  if (yourScore === 5 || computerScore === 5) {
    const winner =
      yourScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    console.log(winner);
    document.getElementById("winner").innerHTML = winner;
    return true;
  }
  return false;
}

// if (yourScore === computerScore) {
//   console.log("Draw!!!");
//   document.getElementById("winner").innerHTML = "Draw!!!";
// } else if (yourScore ===5) {
//   console.log("You Win the whole game!");
//   document.getElementById("winner").innerHTML = "You Win the whole game!";
// } else {
//   console.log("You Lose Kid!");
//   document.getElementById("winner").innerHTML = "You Lose Kid!!!";
// }

game();

// var gameStart = true;
// while (gameStart) {
//   game();

//   alert("Do you want to replay the game? yes or no :");
//   let replay = prompt("");
//   if (replay === "no") {
//     gameStart = false;
//   }
// }

// console.log(game());
