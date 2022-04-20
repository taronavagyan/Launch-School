// 1.

/*
function crunch(string) {
  let crunchedString = "";
  let activeChar = "";
  for (let char of string) {
    if (char !== activeChar) {
      crunchedString += char;
      activeChar = char;
    }
  }
  return crunchedString;
}

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
*/

// 2.

/*
// eslint-disable-next-line max-lines-per-function
function logInBox(text, maxLength) {
  //prettier-ignore
  let length = (text.length + 2) > maxLength ? maxLength : (text.length + 2);
  let topAndBottom = `+${"-".repeat(length)}+`;
  let emptyLine = `|${" ".repeat(length)}|`;
  let words = text.split(" ");
  let lines = [];
  let currentLineLength = 0;
  let currentLine = "";
  for (let word of words) {
    if (currentLineLength + word.length < maxLength - 20) {
      currentLine += word + " ";
      currentLineLength += word.length;
    } else {
      lines.push(currentLine);
      currentLine = word + " ";
      currentLineLength = 0;
    }
  }

  lines.push(currentLine);

  console.log(topAndBottom);

  console.log(emptyLine);
  for (let line of lines) {
    console.log(`| ${line}${" ".repeat(length - line.length - 1)}|`);
  }

  console.log(emptyLine);
  console.log(topAndBottom);
}

logInBox(
  "For a challenging but fun exercise", 50);
*/

// 3.

/*
function stringy(int) {
  let stringyString = "";
  for (let count = 1; count <= int; count += 1) {
    let number = count % 2 === 1 ? 1 : 0;
    stringyString += number;
  }
  return stringyString;
}

console.log(stringy(6));
*/

// 4.

/*
function findFibonacciIndexByLength(digits) {
  let subtractor = BigInt(10n ** (digits - 1n));
  let fibonacci = 1n;
  let previousNum = 1n;
  let numHolder;
  let idx = 2n;

  while (true) {
    numHolder = fibonacci;
    fibonacci += previousNum;
    previousNum = numHolder;
    idx += 1n;
    if (fibonacci - subtractor >= 0) {
      return BigInt(idx);
    }
  }
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n));
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));
*/

// 5.

/*
function triangle(height) {
  let numOfStars = 1;

  console.log();
  for (numOfStars; numOfStars <= height; numOfStars += 1) {
    console.log(`${" ".repeat(height - numOfStars)}${"*".repeat(numOfStars)}`);
  }
  console.log();
}

triangle(7);
*/

// 6.

/*
const readline = require("readline-sync");

let noun = readline.question("Enter a noun: ");
let verb = readline.question("Enter a verb: ");
let adjective = readline.question("Enter an adjective: ");
let adverb = readline.question("Enter an adverb: ");

console.log(
  `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`
);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle`);
*/

// 7.
/*
function twice(num) {
  let numAsString = String(num);
  if (
    numAsString.length % 2 === 0 &&
    numAsString.substring(0, numAsString.length / 2) ===
      numAsString.substring(numAsString.length / 2)
  ) {
    return num;
  }

  return num * 2;
}

console.log(twice(4444));
*/

// 8.

/*
const GRADES = {
  1: "F",
  2: "F",
  3: "F",
  4: "F",
  5: "F",
  6: "D",
  7: "C",
  8: "B",
  9: "A",
};

function getGrade(score1, score2, score3) {
  let meanScore = String((score1 + score2 + score3) / 3);

  if (meanScore === "100") {
    return "A";
  }
  return GRADES[meanScore[0]];
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
*/

// 9.

/*
function cleanUp(string) {
  let lettersOfString = string.split("");

  let cleanString = "";

  for (let letter of lettersOfString) {
    if (/[a-z]/i.test(letter)) {
      cleanString += letter;
    } else if (!cleanString.endsWith(" ")) {
      cleanString += " ";
    }
  }

  return cleanString;
}

console.log(cleanUp("---whAt's my +*& line?")); // " what s my line "
*/

// 10.

/*
function century(year) {
  if (year <= 100) {
    return "1st";
  }

  let centuryNum = Math.floor((year - 1) / 100);
  if (centuryNum % 100 > 0) centuryNum += 1;

  if (/1[1-9]$/.test(centuryNum)) {
    return centuryNum + "th";
  }

  if (String(centuryNum).endsWith("1")) {
    return centuryNum + "st";
  } else if (String(centuryNum).endsWith("2")) {
    return centuryNum + "nd";
  } else if (String(centuryNum).endsWith("3")) {
    return centuryNum + "rd";
  } else {
    return centuryNum + "th";
  }
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
console.log(century(1052)); // "11th"
console.log(century(1127)); // "12th"
console.log(century(11201)); // "113th"
*/
