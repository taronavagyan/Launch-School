// 1.

/*
function repeat(string, times) {
  for (let count = 0; count < times; count += 1) {
    console.log(string);
  }
}

repeat("Hello", 3);
*/

// 2.

/*
function absIsOdd(num) {
  return Math.abs(num) % 2 === 1;
}

console.log(absIsOdd(-5));
console.log(absIsOdd(4));
console.log(absIsOdd(0));
*/

// 3.

/*
function returnDigits(num = "") {
  return String(num)
    .split("")
    .map((digit) => Number(digit));
}

console.log(returnDigits(51231));
console.log(returnDigits());
*/

// 4.

/*
function countOccurrences(items) {
  let occurences = {};
  items.forEach((item) => {
    if (!occurences[item]) {
      occurences[item] = 0;
    }
    occurences[item] += 1;
  });
  return occurences;
}

let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

console.log(countOccurrences(vehicles));
*/

// 5.

/*
function reverseSentence(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

console.log(reverseSentence("hello world"));
console.log(reverseSentence("am i bear, a"));
*/

// 6.

/*
function reverseWordsFiveOrLonger(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length >= 5) {
        return word.split("").reverse().join("");
      }
      return word;
    })
    .join(" ");
}

console.log(reverseWordsFiveOrLonger("Professional"));
console.log(reverseWordsFiveOrLonger("Walk around the block"));
console.log(reverseWordsFiveOrLonger("Launch school"));
*/

// 7.

/*
function stringy(num) {
  let result = "";

  for (let count = 0; count < num; count += 1) {
    if (count % 2 === 0) {
      result += "1";
    } else {
      result += "0";
    }
  }
  return result;
}

console.log(stringy(6));
console.log(stringy(9));
console.log(stringy(4));
console.log(stringy(7));
*/

// 8.

/*
function average(arrayOfNums) {
  return Math.floor(arrayOfNums.reduce((a, b) => a + b) / arrayOfNums.length);
}

console.log(average([1, 6]));
console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
*/

// 9.

/*
function sum(number) {
  return String(number)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
}
console.log(sum(23));
console.log(sum(496));
console.log(sum(123_456_789));
*/

// 10.

/*
function calculateBonus(amount, deserveBonus) {
  return deserveBonus ? amount / 2 : 0;
}
console.log(calculateBonus(1000, true) === 500);
*/
