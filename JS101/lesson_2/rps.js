/*
 * Ask the user for their move
 * the computer will choose their move
 * display who won/the result
 */

// Q1:
/*
 * Is there any preference to while (true) loops over a main() function?
 */
// Q2:
/*
 * displayGameWinner(choice, computerChoice)
 * tallyPoints(choice, computerChoice)
 * displayMatchScore()
 *
 * This block of code felt very clunky, especially since I had to pass
 * the same arguments twice. Is there any way I could refactor it by
 * encapsulating the three functions into a larger one? Also, is there any
 * way I could have tallyPoints function properly without any parameters?
 */
// Q3:
/*
 * I wanted use string interpolation to display the key and value pairs of
 * CHOICE_PAIRS, but wasn't sure how.
 *
 * For example, I wanted to output something like this:
 * CHOOSE ONE: rock (r), paper (p), scissors (x), lizard (l), spock (s)
 *
 * How would I go about this?
 */

// THANK YOU in advance. I'm loving LS so far.

const readline = require("readline-sync");
const CHOICE_PAIRS = {
  r: "rock",
  p: "paper",
  x: "scissors",
  l: "lizard",
  s: "spock",
};
const EXIT_VALUE = "~";

const CHOICE_KEYS = Object.keys(CHOICE_PAIRS);
const CHOICE_VALUES = Object.values(CHOICE_PAIRS);
const POINTS_TO_WIN = 5;
let userPoints = 0;
let computerPoints = 0;
let answer = "";

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function returnProcessedChoice(choice) {
  if (CHOICE_PAIRS[choice]) {
    choice = CHOICE_PAIRS[choice];
  }

  while (
    !CHOICE_VALUES.includes(choice.toLowerCase()) &&
    choice !== EXIT_VALUE
  ) {
    prompt("That's not a valid choice. Hint: 'x' may be entered for scissors.");
    choice = readline.question();

    if (CHOICE_PAIRS[choice]) {
      choice = CHOICE_PAIRS[choice];
    }
  }
  return choice;
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

function tallyPoints(choice, computerChoice) {
  if (userWon(choice, computerChoice)) {
    userPoints += 1;
  } else if (choice === computerChoice) {
    userPoints += 0.5;
    computerPoints += 0.5;
  } else {
    computerPoints += 1;
  }
}

function displayGameWinner(choice, computerChoice) {
  prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);

  if (userWon(choice, computerChoice)) {
    prompt("You won!");
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("Computer won!");
  }
}

function displayMatchScore() {
  if (userPoints >= POINTS_TO_WIN) {
    prompt("You won the match!");
  } else if (computerPoints >= POINTS_TO_WIN) {
    prompt("Computer won the match!");
  } else if (userPoints > computerPoints) {
    prompt(`You're up ${userPoints} to ${computerPoints}. Match to 5.`);
  } else if (userPoints < computerPoints) {
    prompt(`You're down ${userPoints} to ${computerPoints}. Match to 5.`);
  } else {
    prompt(`You're tied ${userPoints} to ${computerPoints}. Match to 5.`);
  }
}

console.clear();
prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock!");
prompt("Enter ~ any time to quit.");
console.log("---------------------------------");

while (answer[0] !== "n") {
  prompt(`Choose one: ${CHOICE_VALUES.join(", ")}`);
  let choice = readline.question();

  choice = returnProcessedChoice(choice);
  if (choice === "~") break;

  let randomIndex = Math.floor(Math.random() * CHOICE_KEYS.length);
  let computerChoice = CHOICE_VALUES[randomIndex];

  displayGameWinner(choice, computerChoice);
  tallyPoints(choice, computerChoice);
  displayMatchScore();

  if (userPoints >= POINTS_TO_WIN || computerPoints >= POINTS_TO_WIN) {
    prompt("Would you like to play again? (y/n)");
    answer = readline.question().toLowerCase();

    while (answer[0] !== "y" && answer[0] !== "n") {
      prompt("Please enter 'y' or 'n'");
      answer = readline.question().toLowerCase();
    }
    userPoints = 0;
    computerPoints = 0;
    console.clear();
  }
}
