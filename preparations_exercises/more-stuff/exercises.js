// 1.

/* [1,4,3] because the object that array2 is pointed to was mutated. */

// 2.

/* 'greeting' is an unassigned variable that you tried to reference on line 4 char 15. */

// 3.

/* console.log(Math.sqrt(37)); */

// 4.

/*
let listOfNums = [1, 6, 3, 2];

function findMax(array) {
  let max = array[0];
  for (let value of array) {
    if (value > max) {
      max = value;
    }
  }
  return max;
}

console.log(findMax(listOfNums));
console.log(Math.max(1,6,3,2));
*/

// 5.

/* it splits a string by spaces(into words), reverses the order of the separated words, and returns an array of each word's length. */

// 6.

/*
function allMatches(array, arg) {
  let matches = [];
  for (let word of array) {
    if (arg.test(word)) {
      matches.push(word);
    }
  } 
  return matches;
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
*/

// 7.

/* Exception handling is predicting errors that might cause the program to fail that need
to be dealt with and safe solutions to them with try/catch statements. */

// 8.

/*
function isNotANumber(arg) {
  if (arg !== arg) {
    return true;
  }
  return false;
}

console.log(isNotANumber(NaN));
console.log(Number.isNaN(NaN));
*/

// 9.

/*
function isNegativeZero(value) {
  return 1 / value === -Infinity;
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
*/

// 10.

/* it returns 5 because, although "5" is coerced into an integer, the increment is applied after the variable is returned. ++y would return 6 */