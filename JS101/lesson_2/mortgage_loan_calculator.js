/*
 * START
 * GET the loan amount
 * GET the APR
 * GET the loan duration in years
 * SET loanDurationInMonths to loanDuration / 12
 * SET monthlyInterestRate to APR / 12
 * SET monthlyPayments
 * RETURN monthlyInterestRate and loanDurationInMonths
 * END
 */
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function getLoanAmount() {
  prompt("How big of a loan would you like? (USD)");
  let loanAmount = Number(readline.question("$"));

  while (loanAmount <= 0 || Number.isNaN(loanAmount)) {
    prompt("Something seems off... Try re-entering the loan amount.");
    loanAmount = Number(readline.question("$"));
  }
  return loanAmount;
}

function getMonthlyInterest() {
  prompt("What is the annual interest rate (APR)?");
  prompt("Example: 10 for 10% or 3.5 or 3.5%");
  let yearlyInterest = readline.question() / 100;

  while (yearlyInterest < 0) {
    prompt("Please provide a positive interest rate.");
    yearlyInterest = readline.question() / 100;
  }
  return yearlyInterest / 12;
}

function getLoanDuration() {
  prompt("How many years and months would you like the loan to be for?");
  let loanDurationInYears =
    "" + readline.question("Years (Press Enter to Skip): ");
  let loanDurationExtraMonths =
    "" + readline.question("Months (Press Enter to Skip): ");

  //prettier-ignore
  let loanDurationInMonths =
    (loanDurationInYears * 12) + Number(loanDurationExtraMonths);
  return loanDurationInMonths;
}

function calculateMonthlyPayments(
  loanAmount,
  monthlyInterest,
  loanDurationInMonths
) {
  let monthlyPayments = (
    loanAmount *
    (monthlyInterest /
      (1 - Math.pow(1 + monthlyInterest, -loanDurationInMonths)))
  ).toFixed(2);
  return monthlyPayments;
}

function restart() {
  prompt("Would you like to do another calculation? (y/n)");
  if (
    readline.question().toLowerCase() === "y" ||
    readline.question().toLowerCase() === "yes"
  ) {
    console.clear();
    start();
  } else {
    prompt("Thank you for using this loan calculator!");
  }
}

prompt("Welcome to Mortgage Calculator!");
function start() {
  console.log("-------------------------------------------------");
  let loanAmount = getLoanAmount();
  let monthlyInterest = getMonthlyInterest();
  let loanDurationInMonths = getLoanDuration();
  let monthlyPayments = calculateMonthlyPayments(
    loanAmount,
    monthlyInterest,
    loanDurationInMonths
  );

  prompt(`Your payments for this loan would be $${monthlyPayments} per month.`);
  restart();
}

start();
