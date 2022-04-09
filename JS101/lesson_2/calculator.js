/*
 * ask the user for the first number
 * ask the user for the second number
 * ask the user for the operation
 * perform the operation
 * display the result of the operation
 */

const readline = require("readline-sync");

console.log("Welcome to the Calculator!");

let number1 = Number(readline.question("What is the first number?\n"));

let number2 = Number(readline.question("What is the second number?\n"));

let operation = readline.question(
  "What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide\n"
);

let output;
if (operation === "1") {
  output = number1 + number2;
} else if (operation === "2") {
  output = number1 - number2;
} else if (operation === "3") {
  output = number1 * number2;
} else if (operation === "4") {
  output = number1 / number2;
}

console.log(`The result is ${output}.`);
