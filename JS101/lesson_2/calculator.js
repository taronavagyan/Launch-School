const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");
const LANGUAGE = "en";

function messages(message, lang) {
  return MESSAGES[lang][message];
}
function prompt(key) {
  let message = messages(key, LANGUAGE);
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

prompt("welcome");

while (true) {
  prompt("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("invalidNumber");
    number1 = readline.question();
  }

  prompt("secondNumber");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("invalidNumber");
    number2 = readline.question();
  }
  prompt("operation");
  let operation = readline.question();

  let output;

  while (!["1", "2", "3", "4", "+", "-", "*", "/"].includes(operation)) {
    prompt("invalidOperation");
    operation = readline.question();
  }
  switch (operation) {
    case "1":
    case "+":
      output = Number(number1) + Number(number2);
      break;
    case "2":
    case "-":
      output = Number(number1) - Number(number2);
      break;
    case "3":
    case "*":
      output = Number(number1) * Number(number2);
      break;
    case "4":
    case "/":
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`=> The result is ${output}.`);
  prompt("keepGoing");
  let response = readline.question();
  if (response[0].toLowerCase() !== "y") break;
}
