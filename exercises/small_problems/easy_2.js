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
