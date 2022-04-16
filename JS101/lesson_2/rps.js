/*
 * Ask the user for their move
 * the computer will choose their move
 * display who won/the result
 */

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];
let answer = "";

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (
    (choice === "rock" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock")
  ) {
    prompt("You won!");
  } else if (
    (choice === "rock" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "scissors") ||
    (choice === "scissors" && computerChoice === "rock")
  ) {
    prompt("Computer won!");
  } else {
    prompt("It's a tie!");
  }
}

while (answer[0] !== "n") {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice.toLowerCase())) {
    prompt("That's not a valid choice.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  answer = readline.question().toLowerCase();

  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
}
