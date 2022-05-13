// 1.

/*
function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase("t"));
console.log(isUppercase("T"));
console.log(isUppercase("Four Score"));
console.log(isUppercase("FOUR SCORE"));
console.log(isUppercase("4SCORE!"));
console.log(isUppercase(""));
*/

// 2.

// GET array of strings
// SET result array to empty array
// For each string
//   replace a,e,i,o,u with empty space and push to result
// RETURN array of strings

/*
function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map((string) => string.replace(/[a,e,i,o,u]/gi, ""));
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"]));
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"]));
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"]));
// ["BC", "", "XYZ"]
*/

// 3.

/*
function letterCaseCount(string) {
  let chars = string.split("");
  let caseCounter = {};

  caseCounter.lower = chars.filter(
    (char) => char === char.toLowerCase() && char.match(/[a-z]/i)
  ).length;
  caseCounter.uppercase = chars.filter(
    (char) => char === char.toUpperCase() && char.match(/[a-z]/i)
  ).length;
  caseCounter.neither = chars.filter((char) => !char.match(/[a-z]/i)).length;

  return caseCounter;
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
*/

// 4.

// GET sentence as a string
// Split string into array of words
// Split words into array of chars
// Capitalize first letter of chars
// Join chars back into word
// Join words back into string
// Return capitalized sentence

/*
function wordCap(sentence) {
  let words = sentence.split(" ");
  words = words.map(
    (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
  );
  return words.join(" ");
}

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
*/

// 5.

// get string
// split string into array of chars
// for char of chars
//   if char is equal to char.toUpperCase(), make it lowercase
//   else make it uppercase
// join chars into string and return
