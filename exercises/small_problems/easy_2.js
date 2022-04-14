// 1.

/*
function greetings(name, titleAndOccupation) {
  let fullName = name.join(" ");
  let fullTitle = Object.values(titleAndOccupation).join(" ");
  return `Greetings, ${fullName}! I hear you're a ${fullTitle}. Impressive!`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
*/

// 2.

/*
const readline = require("readline-sync");

let name = readline.question("What is your name? ");

if (name[name.length - 1] === "!") {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}. Nice to meet you!`);
}
*/

// 3.

/*
function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 5) === 15);
*/

// 4.

/*
const multiply = (num1, num2) => num1 * num2;

const square = (num) => multiply(num, num);

console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

function powerOfN(num, n) {
  let currNumber = num;
  for (let count = 1; count < n; count += 1) {
    currNumber = multiply(currNumber, num);
  }
  return currNumber;
}

console.log(powerOfN(2, 10));
*/

// 5.

/*
const readline = require("readline-sync");

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function doAllOperations(num1, num2) {
  prompt(`${num1} + ${num2} = ${num1 + num2}`);
  prompt(`${num1} - ${num2} = ${num1 - num2}`);
  prompt(`${num1} * ${num2} = ${num1 * num2}`);
  prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
  prompt(`${num1} % ${num2} = ${num1 % num2}`);
  prompt(`${num1} ** ${num2} = ${num1 ** num2}`);
}

prompt("Enter the first number: ");
let num1 = Number(readline.question());

prompt("Enter the second number: ");
let num2 = Number(readline.question());

doAllOperations(num1, num2);
*/
