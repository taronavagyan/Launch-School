// 1.

/*
let age = Math.round(Math.random() * 100) + 20;

console.log(`Teddy is ${age} years old.`);
*/

// 2.

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
