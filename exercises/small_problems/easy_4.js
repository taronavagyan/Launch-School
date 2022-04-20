// 1.

/*
let age = Math.round(Math.random() * 100) + 20;

console.log(`Teddy is ${age} years old.`);
*/

// 2.

/*
const readline = require("readline-sync");

function getNumbersAsArray() {
  let num1 = readline.question("Enter the 1st number: ");
  let num2 = readline.question("Enter the 2nd number: ");
  let num3 = readline.question("Enter the 3rd number: ");
  let num4 = readline.question("Enter the 4th number: ");
  let num5 = readline.question("Enter the 5th number: ");
  let num6 = readline.question("Enter the last number: ");

  return [num1, num2, num3, num4, num5, num6];
}

let numsArray = getNumbersAsArray();
let sixthNum = numsArray.pop();

if (numsArray.includes(sixthNum)) {
  console.log(`The number ${sixthNum} appears in ${numsArray.join(",")}.`);
} else {
  console.log(
    `The number ${sixthNum} does not appear in ${numsArray.join(",")}.`
  );
}
*/
// 3.

/*
const readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retirementAge = readline.question("At what age would you like to retire? ");
const YEARS_TO_GO = retirementAge - age;
const CURRENT_YEAR = new Date().getFullYear();
const RETIREMENT_YEAR = CURRENT_YEAR + YEARS_TO_GO;

console.log(`It's ${CURRENT_YEAR}. You will retire in ${RETIREMENT_YEAR}.`);
console.log(`You only have ${YEARS_TO_GO} years of work to go!`);
*/

// 4.

/*
function isPalindromic(string) {
  return string === string.split("").reverse().join("");
}

console.log(isPalindromic("madam"));
console.log(isPalindromic("Madam"));
console.log(isPalindromic("madam i'm adam"));
console.log(isPalindromic("356653"));
*/
