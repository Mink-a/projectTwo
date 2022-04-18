console.log("Hello from console!");

function computerPlay() {
  choices = ["rock", "paper", "scissors"];

  return String(choices[Math.floor(Math.random() * 3)]);
}



var yourScore = 0;
var computerScore = 0;

function playRound(playerSection, computerSection) {
  if (playerSection === computerSection) {
    document.getElementById("p-score").textContent = yourScore;
    document.getElementById("c-score").textContent = computerScore;

    document.getElementById(
      "choices"
    ).innerHTML = `Draw! ${playerSection} and ${computerSection} are the same`;

    
    return `Draw! ${playerSection} and ${computerSection} are the same`;
  } else if (
    (playerSection === "rock" && computerSection === "scissors") ||
    (playerSection === "paper" && computerSection === "rock") ||
    (playerSection === "scissors" && computerSection === "paper")
  ) {
    yourScore++;
    document.getElementById("p-score").textContent = yourScore;
    document.getElementById("c-score").textContent = computerScore;

    document.getElementById(
      "choices"
    ).innerHTML = `You Win! ${playerSection} beats ${computerSection}`;

    
    return `You Win! ${playerSection} beats ${computerSection}`;
  } else {
    computerScore++;
    document.getElementById("p-score").textContent = yourScore;
    document.getElementById("c-score").textContent = computerScore;

    document.getElementById(
      "choices"
    ).innerHTML = `You Lose! ${computerSection} beats ${playerSection}`;

    
    return `You Lose! ${computerSection} beats ${playerSection}`;
  }
}



const buttons = document.querySelectorAll(".selection button");



function game() {
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let clickedBtn = e.target.id;

      playRound(clickedBtn, computerPlay());
      if (checkWinner()) {
        updateScore();
      }
    });
  });

  restartButton();
}

function updateScore() {
  document.getElementById("p-score").textContent = yourScore;
  document.getElementById("c-score").textContent = computerScore;
}

function checkWinner() {
  if (yourScore === 5 || computerScore === 5) {
    disableButton();
    const winner =
      yourScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    
    document.getElementById("winner").innerHTML = winner;
    return true;
  }
  return false;
}

function restartButton() {
  let btn = document.createElement("button");
  btn.innerHTML = "Restart";
  btn.onclick = function () {
    buttons.forEach((btn) => {
      btn.disabled = false;
    });
    document.getElementById("winner").innerHTML = "";
    document.getElementById("choices").innerHTML = "";
    yourScore = computerScore = 0;
    updateScore();
  };
  document.body.appendChild(btn);
}

function disableButton() {
  // Select the element with id "theButton" and disable it
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
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
