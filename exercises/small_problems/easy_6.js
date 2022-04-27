// 1.

/*
function repeater(string) {
  let chars = string.split("");
  let doubledLetters = chars.map((char) => char + char);
  return doubledLetters.join("");
}

repeater("Hello"); // "HHeelllloo"
repeater("Good job!"); // "GGoooodd  jjoobb!!"
repeater(""); // ""
*/

// 2.

/*
function doubleConsonants(string) {
  let letters = string.split("");
  let result = "";

  for (let letter of letters) {
    if (!["a", "e", "i", "o", "u"].includes(letter.toLowerCase())) {
      result += letter;
    }
    result += letter;
  }

  return result;
}

console.log(doubleConsonants("String"));
console.log(doubleConsonants("Hello-World!"));
console.log(doubleConsonants("July 4th"));
console.log(doubleConsonants(""));
*/
