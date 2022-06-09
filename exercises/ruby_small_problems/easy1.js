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
