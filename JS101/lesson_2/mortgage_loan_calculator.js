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
let loanAmount = "" + readline.question();

prompt("What is the Annual Percentage Rate (0-100)?");
let yearlyInterest = readline.question() / 100;
//prettier-ignore

prompt("How many years would you like the loan to be for?");
let loanDurationInYears = "" + readline.question();
//prettier-ignore
let monthlyInterest =  (Math.round((yearlyInterest / 12) * 1000) / 1000);

let loanDurationInMonths = loanDurationInYears * 12;
//prettier-ignore
let monthlyPayments = Math.round(
  loanAmount *
  (monthlyInterest /
    (1 - Math.pow((1 + monthlyInterest), (-loanDurationInMonths)))));

prompt(`Your payments for this loan would be $${monthlyPayments} per month.`);
