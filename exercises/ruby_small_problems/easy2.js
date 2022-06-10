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
