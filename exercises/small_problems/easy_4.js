// 1.

const { _DBG_set_checkOptions } = require("readline-sync");

/*
let age = Math.round(Math.random() * 100) + 20;

console.log(`Teddy is ${age} years old.`);
*/

// 2.

/*
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
*/
// 3.

/*
const readline = require("readline-sync");

let age = readline.question("What is your age? ");
let retirementAge = readline.question("At what age would you like to retire? ");
const YEARS_TO_GO = retirementAge - age;
const CURRENT_YEAR = new Date().getFullYear();
const RETIREMENT_YEAR = CURRENT_YEAR + YEARS_TO_GO;

console.log(`It's ${CURRENT_YEAR}. You will retire in ${RETIREMENT_YEAR}.`);
console.log(`You only have ${YEARS_TO_GO} years of work to go!`);
*/

// 4.

/*
function isPalindromic(string) {
  return string === string.split("").reverse().join("");
}

console.log(isPalindromic("madam"));
console.log(isPalindromic("Madam"));
console.log(isPalindromic("madam i'm adam"));
console.log(isPalindromic("356653"));
*/

// 5.

/*
function cleanUp(string) {
  let lettersOfString = string.split("");

  let cleanString = "";

  for (let letter of lettersOfString) {
    if (/[a-z]/i.test(letter)) {
      cleanString += letter;
    }
  }

  return cleanString.toLowerCase();
}

function isPalindromic(string) {
  return string === string.split("").reverse().join("");
}

function isRealPalindrome(string) {
  let cleanedString = cleanUp(string);
  return isPalindromic(cleanedString);
}

console.log(isRealPalindrome("Madam")); // true

// OR

function isRealPalindromic(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindromic(string);
}
*/

// 6.

/*
function isPalindromic(string) {
  return string === string.split("").reverse().join("");
}
function isPalindromicNumber(num) {
  num = String(num).replace(/^0+/, "");
  console.log(isPalindromic(num));
}

isPalindromicNumber(34543); // true
isPalindromicNumber(123210); // false
isPalindromicNumber(22); // true
isPalindromicNumber(0050); // true
*/

// 7.

/*
function runningTotal(numArray) {
  let runningTotal = 0;
  return numArray.map((element) => (runningTotal += element));
}

console.log(runningTotal([2, 5, 13])); // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20])); // [14, 25, 32, 47, 67]
console.log(runningTotal([3])); // [3]
console.log(runningTotal([])); // []
*/

// 8.

/*
function wordSizes(string) {
  let words = string.split(" ");
  let count = {};
  let currLength;

  for (let idx = 0; idx < words.length; idx += 1) {
    currLength = words[idx].length;
    if (currLength === 0) {
      continue;
    }

    if (!count[currLength]) {
      count[currLength] = 0;
    }
    count[currLength] += 1;
  }
}

console.log(wordSizes("four sore and seven"));
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!"));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(""));
*/

// 9.

/*
function wordSizes(string) {
  let words = string.replace(/[^a-zA-z ]/g, "").split(" ");
  let count = {};
  let currLength;

  for (let idx = 0; idx < words.length; idx += 1) {
    currLength = words[idx].length;
    if (currLength === 0) continue;

    if (!count[currLength]) {
      count[currLength] = 0;
    }
    count[currLength] += 1;
  }
  return count;
}

wordSizes("Four score and seven."); // { "3": 1, "4": 1, "5": 2 }
wordSizes("Hey diddle diddle, the cat and the fiddle!"); // { "3": 5, "6": 3 }
wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
wordSizes(""); // {}
*/

// 10.

/*
function swap(string) {
  if (string.length === 1) return string;
  let result = "";

  let words = string.split(" ");
  for (let word of words) {
    if (word.length === 1) {
      result += word + " ";
      continue;
    }

    let swappedWord = swapFirstAndLastLetters(word);

    result += swappedWord + " ";
  }
  return result;
}

function swapFirstAndLastLetters(word) {
  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];

  let swappedWord =
    lastLetter + word.substring(1, word.length - 1) + firstLetter;

  return swappedWord;
}
console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"
*/
