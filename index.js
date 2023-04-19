const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Draw game!";
  } else if (computerChoice === "rock" && userChoice === "paper") {
    result = "You win!";
  } else if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You win!";
  } else if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You win!";
  } else if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
  } else if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
  } else if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
  }
  resultDisplay.innerHTML = result;
}
