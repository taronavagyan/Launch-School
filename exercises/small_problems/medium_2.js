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
