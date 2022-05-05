// 1.

/*
function sum(number) {
  let arrayOfDigits = String(number).split("");

  return arrayOfDigits.reduce(
    (accum, currDigit) => accum + Number(currDigit),
    0
  );
}

console.log(sum(23)); // 5
console.log(sum(496)); // 1
console.log(sum(123456789)); // 45
*/

// 2.

/*
const INTEGERS_RANKED = {
  0: 19,
  1: 9,
  2: 18,
  3: 16,
  4: 5,
  5: 4,
  6: 12,
  7: 10,
  8: 0,
  9: 7,
  10: 14,
  11: 2,
  12: 17,
  13: 15,
  14: 6,
  15: 3,
  16: 13,
  17: 11,
  18: 1,
  19: 8,
};

function alphabeticNumberSort(arrayOfNums) {
  return [...arrayOfNums].sort(
    (a, b) => INTEGERS_RANKED[a] - INTEGERS_RANKED[b]
  );
}

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
*/

// 3.

/*
function multiplyAllPairs(list1, list2) {
  let result = [];

  for (let digit of list1) {
    for (let value of list2) {
      result.push(digit * value);
    }
  }

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));
// [2, 4, 4, 6, 8, 8, 12, 16]
*/

// 4.

// 1. split string into array of chars
// 1a.  intialize a result array to []
// 1b.  initliaze a endIndex variable to 1
// 2. while endIndex < arrayOfChars.length
// 2a.  result.push(arrayOfChars.substring(0, endIndex))
// 2b.  endIndex += 1
// 3. return result

/*
function leadingSubstrings(string) {
  let result = [];
  let endIndex = 1;

  while (endIndex <= string.length) {
    result.push(string.substring(0, endIndex));
    endIndex += 1;
  }
  return result;
}

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
*/

// 5.

/*
function substrings(string) {
  let result = [];
  let endIndex = 1;

  while (endIndex <= string.length) {
    for (let idx = 0; idx < string.length; idx += 1) {
      result.push(string.substring(idx, endIndex));
    }
    endIndex += 1;
  }
  return result.filter((substring) => substring !== "").sort();
}

console.log(substrings("abcde"));
*/
