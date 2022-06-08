// 1.

// PROBLEM:

// Given a string, return the percentage of characters that are
// lowercase, uppercase, or neither in an object

// EXAMPLES:

/*

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

*/

// DATA STRUCTURE:

// Input: String with minimum length of 1 char
// Output: Object with 3 properties
// lowercase, uppercase, neither
// object values are percentages represented with a STRING
// percentages are rounded to the nearest hundredth

// ALGORITHM:

// GET string
// SET casePercentages to an empty object
// SET lowercaseCount to 0
// SET uppercaseCount to 0
// SET neitherCount to 0
// For each char of the string
//  if char.toLowerCase() is equal to char
//  but char.toUpperCase() is not equal to char, increment lowercaseCount by 1
//  else if char.toUpperCase() is equal to char
//  but char.toLowerCase() is not equal to char, increment uppercaseCount by 1
//  else increment neither by 1
// SET casePercentages[lowercase] to lowercaseCount divided by the length
// of the string and then round to the hundredths place
// SET casePercentages[uppercase] to uppercaseCount divided by the length
// of the string and then round to the hundredths place
// SET casePercentages[neither] to 100 - casePercentages[uppercase] -
// casePercentages[lowercase]

// eslint-disable-next-line max-lines-per-function
/*
function letterPercentages(string) {
  let casePercentages = {};
  let lowercaseCount = 0;
  let uppercaseCount = 0;
  let neitherCount = 0;

  for (let char of string) {
    if (char === char.toLowerCase() && char !== char.toUpperCase()) {
      lowercaseCount += 1;
    } else if (char !== char.toLowerCase() && char === char.toUpperCase()) {
      uppercaseCount += 1;
    } else {
      neitherCount += 1;
    }
  }

  casePercentages["lowercase"] = calculatePercentage(
    lowercaseCount,
    string.length
  );
  casePercentages["uppercase"] = calculatePercentage(
    uppercaseCount,
    string.length
  );
  casePercentages["neither"] = calculatePercentage(neitherCount, string.length);

  console.log(casePercentages);
}

function calculatePercentage(target, total) {
  return ((target / total) * 100).toFixed(2);
}

letterPercentages("abCdef 123"); // 10 [5, 1, 4]
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages("AbCd +Ef"); // 8 [3, 3, 2]
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages("123"); // 3 [0, 0, 3]
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
*/

// 2.

// PROBLEM:

// Given 3 numbers representing sides of a triangle
// return isoceles, scalene, equilateral, or invalid
// with the output representing the type of triangle the sides make

/*
Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.
Invalid: One of the 3 sides have a length of 0 or less OR the sum of the two
         shortest sides are less or equal to than the length of the longest side
*/

// EXAMPLES:

/*
triangle(3, 3, 3);        // "equilateral"
triangle(3, 3, 1.5);      // "isosceles"
triangle(3, 4, 5);        // "scalene"
triangle(0, 3, 3);        // "invalid"
triangle(3, 1, 1);        // "invalid"
*/

// DATA STRUCTURE:

// INPUT: Three numbers
// OUTPUT: a string
// In-between: Array

// ALGORITHM:

// GET three sides of the string
// Initialize sides to an array containing the 3 lengths
// Filter sides by ascending lengths
// If sides contains a number less than 0, return "invalid"
// If the first two lengths are less than or equal to the third length,
//   return invalid
// If the three sides are all equal, return equilateral
// If two of the sides are equal, return isoceles
// Else, return scalene

// CODE:

/*
function triangle(side1, side2, side3) {
  let sides = [side1, side2, side3];
  sides.sort((a, b) => a - b);
  if (sides.some((side) => side <= 0) || !(sides[0] + sides[1] > sides[2])) {
    return "invalid";
  }

  if (sides.every((side) => side === sides[0])) return "equilateral";

  if (side1 === side2 || side1 === side3 || side3 === side2) {
    return "isoceles";
  }
  return "scalene";
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
*/

// 3.

// PROBLEM:

// Given 3 numbers representing angles,
// Return 'invalid' if the sum of the angles is not 180
//   or if any angle is less than or equal to 0
// Return 'right' is one angle is 90
// Return 'acute' is all angles are less than 90
// Return 'obtusde' if one angle is greater than 90

// EXAMPLES/ TEST CASES:

/*
triangle(60, 70, 50);       // "acute"
triangle(30, 90, 60);       // "right"
triangle(120, 50, 10);      // "obtuse"
triangle(0, 90, 90);        // "invalid"
triangle(50, 50, 50);       // "invalid"
*/

// DATA STRUCTURE:

// Input: 3 numbers, always integers
// Output: One string
// Intermediary: Array (?)

// ALGORITHM:

// GET the three numbers
// SET an array with the three numbers
// If any angle is <= 0 or the sum of the angles is
//   not 180, return 'invalid;
// Return 'right' if any angle is 90
// Return 'acute' if all angles are <90
// Return 'obtuse' if any angle is >90

// CODE:

/*
function triangle(angle1, angle2, angle3) {
  let angles = [angle1, angle2, angle3];
  if (
    angles.some((angle) => angle <= 0) ||
    angles.reduce((a, b) => a + b) !== 180
  ) {
    return "invalid";
  }

  if (angles.some((angle) => angle === 90)) return "right";
  if (angles.every((angle) => angle < 90)) return "acute";
  return "obtuse";
}

console.log(triangle(60, 70, 50)); // "acute"
console.log(triangle(30, 90, 60)); // "right"
console.log(triangle(120, 50, 10)); // "obtuse"
console.log(triangle(0, 90, 90)); // "invalid"
console.log(triangle(50, 50, 50)); // "invalid"
*/

// 4.

// PROBLEM:

// Given a year after 1752,
// Return a number representing how many Friday the 13ths
//  there were in that calendar year

// EXAMPLES/ TEST CASES:

/*
fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2
*/

// DATA STRUCTURE:

// Input: One number representing a year
// Output: One number representing total Friday the 13ths
// Intermediary: Date (?)

// ALGORITHM:

// Create an array with every month
// GET a number representing the year
// SET fridayTheThirteenCount to 0
// For the 13th day of every month
//   If the day of the week is Friday
//     Increment fridayTheThirteenCount by 1
// RETURN fridayTheThirteenCount

// CODE:

/*
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function fridayThe13ths(year) {
  let fridayTheThirteenCount = 0;
  for (let month of MONTHS) {
    let date = new Date(`${month} 13, ${year}`);
    let day = date.getDay();
    if (DAYS[day] === "Friday") {
      fridayTheThirteenCount += 1;
    }
  }
  return fridayTheThirteenCount;
}

fridayThe13ths(1986); // 1
fridayThe13ths(2015); // 3
fridayThe13ths(2017); // 2
*/

// 5.

// PROBLEM:

// Given a number return the next greater featured number
// Return an error message if there is no next featured number

// A featured number:
//  Is a multiple of 7
//  Is odd
//  Has all of its digits occuring exactly once
// The largest featured number is 9876543201

// EXAMPLES/ TEST CASES:

/*
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);
// "There is no possible number that fulfills those requirements."
*/

// DATA STRUCTURE:

// Input: One number
// Output: One number or a string (error message)
// Intermediary: Number

// ALGORITHM:

// GET the integer argument
// If the number is greater than or equal to 9876543201
//   return an error message
// Else
// Loop through the multiples of 7
// If they are odd,
//   Check if each digit occurs only once
//     If so, return the number
// Continue until a featured number is found

// CODE:

/*

const MAX_FEATURED = 9876543201;
function isOdd(num) {
  return num % 2 === 1;
}

function hasUniqueDigitsOnly(num) {
  let chars = (num + "").split("");
  let occurences = {};

  chars.forEach((char) => {
    if (!occurences[char]) {
      occurences[char] = 0;
    }
    occurences[char] += 1;
  });
  return !Object.values(occurences).some((occurence) => occurence > 1);
}
function featured(int) {
  if (int >= MAX_FEATURED) {
    return "There is no possible number that fulfills those requirements.";
  }
  let featuredNum = 7;

  while (featuredNum <= int) {
    featuredNum += 7;
  }

  while (true) {
    if (isOdd(featuredNum) && hasUniqueDigitsOnly(featuredNum)) {
      return featuredNum;
    }
    featuredNum += 7;
  }
}

featured(12); // 21
featured(20); // 21
featured(21); // 35
featured(997); // 1029
featured(1029); // 1043
featured(999999); // 1023547
featured(999999987); // 1023456987
featured(9876543186); // 9876543201
featured(9876543200); // 9876543201
featured(9876543201);
*/

// 6.

// PROBLEM:

// Given a number representing the first [count] integers
// Return the difference between the square of the sum
//  of the first [count] numbers and the sum of the squares of
//  the first [count] numbers

// EXAMPLES/ TEST CASES:

/*
sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150
*/

// DATA STRUCTURE:

// Input: One Number (integer)
// Output: One Number (integer)
// Intermediary (?): Two numbers

// ALGORITHM:

// GET the number representing the first [count] integers starting from 1
// Calculate the square of the sum of the first [count] integers
//   Set the above value to squareOfSums
// Calculate the sum of the square of the first [count] integers
//   Set the above value to sumOfSquares
// Subtract sumOfSquares from squareOfSums and return the difference

// CODE:

/*
function sumSquareDifference(count) {
  let firstCountIntegers = [];
  for (let num = 1; num <= count; num += 1) {
    firstCountIntegers.push(num);
  }
  let squareOfSums = firstCountIntegers.reduce((a, b) => a + b) ** 2;
  //prettier-ignore
  let sumOfSquares = firstCountIntegers.reduce((a, b) => a + (b ** 2));
  return squareOfSums - sumOfSquares;
}

sumSquareDifference(3); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
sumSquareDifference(10); // 2640
sumSquareDifference(1); // 0
sumSquareDifference(100); // 25164150
*/
