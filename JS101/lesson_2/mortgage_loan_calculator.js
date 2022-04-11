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

function prompt(message) {
  console.log(`=> ${message}`);
}

const readline = require("readline-sync");

prompt("How big of a loan would you like? (USD)");
let loanAmount = Number(readline.question("$"));

while (loanAmount <= 0 || Number.isNaN(loanAmount)) {
  prompt("Something seems off... Try re-entering the loan amount.");
  loanAmount = Number(readline.question("$"));
}

prompt("What is the annual interest rate (APR)?");
let yearlyInterest = readline.question() / 100;

while (yearlyInterest < 0) {
  prompt("Please provide a positive interest rate.");
  yearlyInterest = readline.question() / 100;
}

prompt("How many years would you like the loan to be for?");
let loanDurationInYears = "" + readline.question();
//prettier-ignore
let monthlyInterest =  yearlyInterest / 12;

let loanDurationInMonths = loanDurationInYears * 12;
//prettier-ignore
let monthlyPayments = Math.round(
  loanAmount *
  (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-loanDurationInMonths)))));

prompt(`Your payments for this loan would be $${monthlyPayments} per month.`);
