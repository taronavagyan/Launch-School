/*
 * welcome
 * get valid numbers
 * get operation
 * do operation
 * return result
 * ask for repeat
 */
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

function isInvalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

function getNumber(whichNumber) {
  let givenNumber;
  prompt(whichNumber);
  while (true) {
    givenNumber = readline.question();
    if (isInvalidNumber(givenNumber)) {
      prompt("invalidNumber");
    } else {
      return Number(givenNumber);
    }
  }
}

prompt("welcome");

while (true) {
  let number1 = getNumber("firstNumber");
  let number2 = getNumber("secondNumber");

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
      output = number1 + number2;
      break;
    case "2":
    case "-":
      output = number1 - number2;
      break;
    case "3":
    case "*":
      output = number1 * number2;
      break;
    case "4":
    case "/":
      output = number1 / number2;
      break;
  }

  console.log(`=> The result is ${output}.`);
  prompt("keepGoing");
  let response = readline.question();
  if (response[0].toLowerCase() !== "y") break;
}
