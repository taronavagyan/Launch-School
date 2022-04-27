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

// 3.

/*
function reverseNumber(number) {
  let reversedNum = String(number).split("").reverse();
  while (reversedNum[0] === "0") {
    reversedNum.shift();
  }

  return reversedNum.join("");
}

console.log(reverseNumber(12345));
console.log(reverseNumber(12213));
console.log(reverseNumber(456));
console.log(reverseNumber(12000));
console.log(reverseNumber(1));
*/
