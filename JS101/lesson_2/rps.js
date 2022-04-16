/*
 * Ask the user for their move
 * the computer will choose their move
 * display who won/the result
 */

const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
let answer = "";

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function userWon(choice, computerChoice) {
  return (
    (choice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (choice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (choice === "spock" &&
      (computerChoice === "rock" || computerChoice === "scissors"))
  );
}

function computerWon(choice, computerChoice) {
  return (
    (choice === "rock" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (choice === "scissors" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "paper" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "lizard" &&
      (computerChoice === "scissors" || computerChoice === "rock")) ||
    (choice === "spock" &&
      (computerChoice === "lizard" || computerChoice === "paper"))
  );
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (userWon(choice, computerChoice)) {
    prompt("You won!");
  } else if (computerWon(choice, computerChoice)) {
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
