// 1.

/*
function isOdd(num) {
  return num % 2 !== 0;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
*/

// 2.

/*
for (let count = 1; count <= 99; count += 2) {
  console.log(count);
}
*/

// 3.

/*
for (let count = 2; count <= 99; count += 2) {
  console.log(count);
}
*/

// 4.

/*
const readline = require("readline-sync");
const SQMETERS_TO_SQFEET = 10.7639;

let desiredInput = readline.question(
  "Would you like the area in feet or meters?\n"
);

while (
  desiredInput.toLowerCase() !== "feet" &&
  desiredInput.toLowerCase() !== "meters"
) {
  console.log("Please enter feet or meters.");
  desiredInput = readline.prompt();
}

if (desiredInput === "meters") {
  console.log("Enter the length of the room in meters:");
  let lengthInMeters = readline.prompt();

  console.log("Enter the width of the room in meters:");
  let widthInMeters = readline.prompt();

  let areaInMeters = (widthInMeters * lengthInMeters).toFixed(2);
  let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET).toFixed(2);
  console.log(
    `The area of the room is ${areaInMeters} square
     meters (${areaInFeet} square feet).`
  );
} else {
  console.log("Enter the length of the room in feet:");
  let lengthInFeet = readline.prompt();

  console.log("Enter the width of the room in feet:");
  let widthInFeet = readline.prompt();

  let areaInFeet = (lengthInFeet * widthInFeet).toFixed(2);
  let areaInMeters = (areaInFeet / SQMETERS_TO_SQFEET).toFixed(2);
  console.log(
    `The area of the room is ${areaInFeet} square feet
     (${areaInMeters} square meters.)`
  );
}
*/

// 5.

/*
const readline = require("readline-sync");

let billAmount = readline.question("What is the bill? ");
//prettier-ignore
let tipPercent = 1 + (readline.question("What is the tip percentage? ") / 100);
let totalDue = Math.round(billAmount * tipPercent).toFixed(2);
let tipAmount = Math.round(totalDue - billAmount).toFixed(2);

console.log(`The tip is $${tipAmount}`);
console.log(`The total is $${totalDue}`);
*/

// 6.

/*
const readline = require("readline-sync");

let integerGiven = Number(
  readline.question("Please input an integer greater than 0: ")
);

while (integerGiven <= 0) {
  integerGiven = readline.question(
    "Invalid input. Please enter an integer greater than 0: "
  );
}

let sumOrProduct = readline.question(
  'Enter "s" to compute the sum, or "p" to compute the product: '
);

while (!["s", "p"].includes(sumOrProduct)) {
  sumOrProduct = readline.question(
    'Invalid input. Enter "s" to compute the sum, or "p"
     to compute the product: '
  );
}
if (sumOrProduct === "s") {
  let sum = 0;
  for (let count = 1; count <= integerGiven; count += 1) {
    sum += count;
  }
  console.log(
    `The sum of the integers between 1 and ${integerGiven} is ${sum}.`
  );
} else {
  let product = 1;
  for (let count = 1; count <= integerGiven; count += 1) {
    product *= count;
  }
  console.log(
    `The product of the integers between 1 and ${integerGiven} is ${product}.`
  );
}
*/

// 7.

/*
function shortLongShort(string1, string2) {
  let shortString;
  let longString;
  if (string1.length < string2.length) {
    shortString = string1;
    longString = string2;
  } else {
    shortString = string2;
    longString = string1;
  }
  return shortString.concat(longString).concat(shortString);
}

shortLongShort("1231244", "abc");
*/

// 8.

/*
function isLeapYear(year) {
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  if (year % 4 !== 0) {
    return false;
  }
  return true;
}

isLeapYear(2016); // true
isLeapYear(2015); // false
isLeapYear(2100); // false
isLeapYear(2400); // true
isLeapYear(240000); // true
isLeapYear(240001); // false
isLeapYear(2000); // true
isLeapYear(1900); // false
isLeapYear(1752); // true
isLeapYear(1700); // false
isLeapYear(1); // false
isLeapYear(100); // false
isLeapYear(400); // true
*/

// 9.

/*
function isLeapYear(year) {
  if (year <= 1752) {
    return year % 4 === 0;
  }
  if (year % 100 === 0 && year % 400 !== 0) {
    return false;
  }
  if (year % 4 !== 0) {
    return false;
  }
  return true;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
*/

// 10.

/*
function multisum(num) {
  let multiples = [];
  for (let count = 1; count <= num; count += 1) {
    if (count % 3 === 0) {
      multiples.push(count);
    } else if (count % 5 === 0) {
      multiples.push(count);
    }
  }
  return multiples.reduce((accumulator, multiple) => accumulator + multiple, 0);
}

console.log(multisum(1000));
*/
// 11.

/*
function utf16Value(string) {
  let sumOfValues = 0;

  for (let index = 0; index < string.length; index += 1) {
    sumOfValues += string.charCodeAt(index);
  }

  return sumOfValues;
}
*/
