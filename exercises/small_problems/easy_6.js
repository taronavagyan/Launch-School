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

// 9.

/*
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
*/

// 10.

/*
function reverseWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length < 5) return word;
      return reverseWord(word);
    })
    .join(" ");
}

function reverseWord(word) {
  return word.split("").reverse().join("");
}

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"
*/

// 11.

/*
function reverseArray(arr) {
  let reversedArr = [];

  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    reversedArr.push(arr[idx]);
  }

  arr.map((_, idx) => (arr[idx] = reversedArr[idx]));
  return arr;
}

let list = [1, 2, 3, 4];
let result = reverseArray(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverseArray(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverseArray(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverseArray(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true
*/

// 12.

/*
function isBalanced(string) {
  let chars = string.split("");
  let openParenthesisIndices = [];
  let closedParenthesisIndices = [];

  chars.forEach((char, idx) => {
    if (char === "(") openParenthesisIndices.push(idx);
    if (char === ")") closedParenthesisIndices.push(idx);
  });

  if (openParenthesisIndices.length !== closedParenthesisIndices.length) {
    return false;
  }

  for (let idx = 0; idx < openParenthesisIndices.length; idx += 1) {
    if (closedParenthesisIndices[idx] < openParenthesisIndices[idx]) {
      return false;
    }
  }
  return true;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);

console.log(isBalanced("What ((is))) up(") === false);
*/
