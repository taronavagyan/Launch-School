/*
 * Ask the user for their move
 * the computer will choose their move
 * display who won/the result
 */

const readline = require("readline-sync");
const CHOICE_PAIRS = {
  r: "rock",
  p: "paper",
  x: "scissors",
  l: "lizard",
  s: "spock",
};
const CHOICE_KEYS = Object.keys(CHOICE_PAIRS);
const CHOICE_VALUES = Object.values(CHOICE_PAIRS);
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
  prompt(`Choose one: ${CHOICE_VALUES.join(", ")}`);
  let choice = readline.question();

  if (CHOICE_PAIRS[choice]) {
    choice = CHOICE_PAIRS[choice];
  }

  while (
    !CHOICE_KEYS.includes(choice.toLowerCase()) &&
    !CHOICE_VALUES.includes(choice.toLowerCase())
  ) {
    prompt("That's not a valid choice. Hint: 'x' is short for scissors.");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * CHOICE_KEYS.length);
  let computerChoice = CHOICE_VALUES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  answer = readline.question().toLowerCase();

  while (answer[0] !== "y" && answer[0] !== "n") {
    prompt("Please enter 'y' or 'n'");
    answer = readline.question().toLowerCase();
  }
}
