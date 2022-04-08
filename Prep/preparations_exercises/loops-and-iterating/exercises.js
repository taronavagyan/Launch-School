// 1.

/* see age.js */

// 2.

/*
function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
*/

// 3.

/* The counter value is reset to 1 at the start of each loop, so it will never be greater than 2. Also, 1 is truthy. */

// 4.

/* It doesn't produce an error since all 3 components of a for loop are optional. i is incremented during the loop,
so the output is 1\n2\n3\n4\n5\n
*/

// 5.

/*
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

do {
  result = randomNumberBetween(1, 6);
  tries += 1;
} while (result <= 2);
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
*/

// 6.

/*
function factorial(number) {
  if (number === 1) return number;

  return factorial(number - 1) * number;
}
*/