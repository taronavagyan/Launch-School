// PROBLEM:

// Get 6 numbers from the user
// Print a message that describes whether or not
// the 6th number appears amongst first 5

// EXAMPLES/ TEST CASES:

/*
==> Enter the 1st number:
25
==> Enter the 2nd number:
15
==> Enter the 3rd number:
20
==> Enter the 4th number:
17
==> Enter the 5th number:
23
==> Enter the last number:
17
The number 17 appears in [25, 15, 20, 17, 23].


==> Enter the 1st number:
25
==> Enter the 2nd number:
15
==> Enter the 3rd number:
20
==> Enter the 4th number:
17
==> Enter the 5th number:
23
==> Enter the last number:
18
The number 18 does not appear in [25, 15, 20, 17, 23].
*/

// DATA STRUCTURE:

// Input: 6 numbers
// Output: String
// Intermediate (?): Array

// ALGORITHM:

// SET numbers to an empty array
// Prompt the user for a number
// Add the number to the end of the numbers array
// Repeat 6 times
// Take the number at the end of numbers array
// If the numbers array includes this number say so
// Else, say it doesnt

// CODE:

/*
const readline = require("readline-sync");

const numbers = [];

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt(`Enter the 1st number`);
numbers.push(Number(readline.question()));

prompt(`Enter the 2nd number`);
numbers.push(Number(readline.question()));

prompt(`Enter the 3rd number`);
numbers.push(Number(readline.question()));

prompt(`Enter the 4th number`);
numbers.push(Number(readline.question()));

prompt(`Enter the 5th number`);
numbers.push(Number(readline.question()));

prompt(`Enter the 6th number`);
numbers.push(Number(readline.question()));

let sixthNum = numbers.pop();

if (numbers.includes(sixthNum)) {
  console.log(`The number ${sixthNum} appears in [${numbers.join(", ")}].`);
} else {
  console.log(
    `The number ${sixthNum} does not appear in [${numbers.join(", ")}].`
  );
}
*/

// 2.

// PROBLEM:

// Prompt the user for two positive integers
// Print the results of the following operations on them:
// +, -, *, /, %, **

// EXAMPLES/ TEST CASES:

/*
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 141050039560662968926103
*/

// DATA STRUCTURE:
// Input: 2 numbers
// Output: strings

// ALGORITHM:
// Prompt the user for first number
// Store the first num
// Prompt the user for second number
// Store the second num
// Do all operations and print results

// CODE:

const readline = require(`readline-sync`);

function prompt(msg) {
  console.log(`==> ${msg}`);
}

prompt("Enter the first number: ");
let firstNum = Number(readline.question());

prompt("Enter the second number: ");
let secondNum = Number(readline.question());

prompt(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
prompt(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
prompt(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
prompt(`${firstNum} / ${secondNum} = ${Math.floor(firstNum / secondNum)}`);
prompt(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
prompt(`${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`);
