// 1.

/*
4
5
0
3
101
*/

// 2.

/*
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
myArray.filter(num => num % 2 === 0).forEach(num => console.log(num));
*/

// 3.

/*
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let i = 0; i < myArray.length; i++) {
  for(let count = 0; count < myArray[i].length; count++) {
    if (myArray[i][count] % 2 === 0) {
      console.log(myArray[i][count]);
    }
  }
}
*/

// 4.

/*
let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let mappedArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

console.log(mappedArray);
*/

// 5.

/*
let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];


function findIntegers(array) {
  return array.filter(num => Number.isInteger(num) === true);
}

console.log(findIntegers(things));
*/

// 6.

/*
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return array.map(thing => thing.length).filter(length => length % 2 !== 0);
}

console.log(oddLengths(arr));
*/

// 7.

/*
let array = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((sum,number) => number * number + sum, 0);
}

console.log(sumOfSquares(array));
*/

// 8.

/*
function oddLengths(array) {
  return array.reduce((filteredNumbersArray, word) => {
    let length = word.length;
    if (length % 2 !== 0) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
*/

// 9.

/*
function containsThree(array) {
  return array.includes(3);
}
*/

// 10.

/*
let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

arr[1][3] = 606;
*/