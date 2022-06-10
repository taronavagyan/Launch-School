// 1.

/*
let age = Math.floor(Math.random() * 181) + 20;
console.log(`Teddy is ${age} years old.`);
*/

// 2.

/*
const readline = require("readline-sync");
const SQ_METERS_TO_SQ_FEET = 10.7639;

let lengthInMeters = readline.question(
  "Enter the length of the room in meters: "
);

let widthInMeters = readline.question(
  "Enter the width of the room in meters: "
);

let squareMeters = (lengthInMeters * widthInMeters).toFixed(1);
let squareFeet = (squareMeters * SQ_METERS_TO_SQ_FEET).toFixed(2);

console.log(
  `The area of the room is ${squareMeters} square meters (${squareFeet} square
     feet).`
);
*/

// 3.

/*
const readline = require("readline-sync");

let billAmount = readline.question("What is the bill amount? ") * 1;

let tipPercentage =
  readline.question("What percentage tip would you like to give? ") / 100;

let tipAmount = billAmount * tipPercentage;

let billWithTip = billAmount + tipAmount;

console.log(`The tip is $${tipAmount} and the total bill is $${billWithTip}`);
*/

// 4.

// GET current age
// GET retirement age
// SET years until retirement to retirement age minus current age
// GET current year
// SET retirement age to current year + years until retirement
// print

/*
const readline = require("readline-sync");

let currentAge = readline.question("What is your age? ") * 1;
let retirementAge =
  readline.question("At what age would you like to retire? ") * 1;

let yearsToRetirement = retirementAge - currentAge;
let currentYear = new Date().getFullYear();

let retirementYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You only have ${yearsToRetirement} years of work to go!`);
*/
