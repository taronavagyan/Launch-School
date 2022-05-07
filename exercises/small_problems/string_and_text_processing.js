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
