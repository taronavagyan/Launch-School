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

// 6.

/*
function palindromes(string) {
  return substrings(string).filter(
    (substring) =>
      substring.length > 1 &&
      substring === substring.split("").reverse().join("")
  );
}

function substrings(string) {
  let substrings = [];
  for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
    let substring = string.substring(startIndex);
    substrings = substrings.concat(leadingSubstrings(substring));
  }

  return substrings;
}

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

console.log(palindromes("madam"));
console.log(palindromes("abcd"));
console.log(palindromes("knitting cassettes"));
*/

// 7.

/*
function sumOfSums(arrayOfNums) {
  let sum = 0;
  let multiplier = arrayOfNums.length;

  for (let num of arrayOfNums) {
    sum += num * multiplier;
    multiplier -= 1;
  }
  return sum;
}

sumOfSums([3, 5, 2]); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]); // 4
sumOfSums([1, 2, 3, 4, 5]); // 35
*/

// 8.

// GET array of subarrays. Each subarray contains a string representing
// a fruit, and a number representing the quantity
// Create an empty result array
// For each subarray, push the string to result [quantity] number of times
// Return result

/*
function buyFruit(groceryList) {
  let result = [];

  for (let subarray of groceryList) {
    let item = subarray[0];
    let quantity = subarray[1];

    while (quantity > 0) {
      result.push(item);
      quantity -= 1;
    }
  }

  return result;
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
*/

// 9.

// GET a target ID
// GET an array of transactions
// transactionsArray contains objects with
// ID, movement, and quantity properties
// return transactions filtered by ID property compared to target ID

/*
function transactionsFor(itemID, transactions) {
  return transactions.filter((transcation) => transcation.id === itemID);
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]
*/

// 10.

// GET itemID
// GET a target ID
// GET an array of transactions
// transactionsArray contains objects with
// ID, movement, and quantity properties
// SET itemHistory to transactions filtered by ID property compared to target ID
// SET itemAdded to itemHistory filtered by movement property compared to 'in',
// reduced to a sum quantity
// SET itemTaken to itemHistory filtered by movement property compared to 'out'
// reduced to a sum quantity
//  itemAdded - itemTaken > 0

/*
function isItemAvailable(itemId, transactions) {
  let itemHistory = transactionsFor(itemId, transactions);
  let itemInputted = itemHistory.filter((item) => item.movement === "in");
  let itemOutputted = itemHistory.filter((item) => item.movement === "out");

  let itemAdded = 0;
  let itemTaken = 0;

  for (let transaction of itemInputted) {
    itemAdded += transaction.quantity;
  }

  for (let transaction of itemOutputted) {
    itemTaken += transaction.quantity;
  }

  return itemAdded - itemTaken > 0;
}

function transactionsFor(itemID, transactions) {
  return transactions.filter((transcation) => transcation.id === itemID);
}

let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

console.log(isItemAvailable(101, transactions)); // false
console.log(isItemAvailable(103, transactions)); // false
console.log(isItemAvailable(105, transactions)); // true
*/
