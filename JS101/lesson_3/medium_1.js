// 1.

/*
function tenXWithIndents(string) {
  for (let padding = 0; padding < 10; padding += 1) {
    console.log(" ".repeat(padding) + string);
  }
}

tenXWithIndents("The Flintstones Rock!");
*/

// 2.

/*
let munstersDescription = "The Munsters are creepy and spooky.";

function swapCasing(text) {
  let chars = text.split("");
  let stringSwappedCasing = [];
  for (let char of chars) {
    let swappedChar =
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    stringSwappedCasing.push(swappedChar);
  }
  return stringSwappedCasing.join("");
}

console.log(swapCasing(munstersDescription));
*/

// 3.

/*
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(-5));

// number % divisor === 0 returns true if divisor is a factor of number
*/

// 4.

/*
Yes, if an array is passed for the newElement parameter, then
push will add the array as an element, while concat will
merge the two arrays.

Also, push will mutate the argument represented by buffer, while
concat will not.
*/

// 5.

/*

console.log(0.3 + 0.6); // 0.8999999999999999

console.log(0.3 + 0.6 === 0.9); // false

JavaScript uses floating point numbers for all numeric operations.
Most floating point representations used on computers lack a certain
amount of precision, and that can yield unexpected results like these.

*/

// 6.

/*
False because NaN is not equivalent to itself.
Number.isNaN() can be used to verify is a value is NaN.
*/

// 7.
