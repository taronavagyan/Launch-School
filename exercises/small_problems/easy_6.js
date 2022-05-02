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

// 4.

/*
function centerOf(string) {
  let indexOfCenter = Math.floor(string.length / 2);
  return isOdd(string)
    ? string[indexOfCenter]
    : string[indexOfCenter - 1] + string[indexOfCenter];
}

function isOdd(string) {
  return string.length % 2 === 1;
}
console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
*/

// 5.

/*
function returnNegative(number) {
  let positivity = number >= 0 ? 1 : -1;
  let numberPositive = number * positivity;

  return Number("-" + numberPositive);
}
console.log(returnNegative(5));
console.log(returnNegative(-5));
console.log(returnNegative(0));
console.log(returnNegative(-0));
*/

// 6.

/*
function sequence(max) {
  let sequenceArray = [];

  for (let count = 1; count <= max; count += 1) {
    sequenceArray.push(count);
  }
  return sequenceArray;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
console.log(sequence(10));
*/

// 7.

/*
function swapName(fullname) {
  let names = fullname.split(" ");
  return names[1] + ", " + names[0];
}

console.log(swapName("Joe Roberts")); // "Roberts, Joe"
*/

// 8.

/*
function sequence(count, num) {
  let sequenceArray = [];
  for (let times = 1; times <= count; times += 1) {
    sequenceArray.push(num * times);
  }
  return sequenceArray;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 100));
*/