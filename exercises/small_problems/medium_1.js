// 1.

/*
function rotateArray(arr) {
  if (!Array.isArray(arr)) return undefined;
  if (arr.length === 0) return [];
  let copiedArr = [...arr];
  let firstVal = copiedArr.shift();
  copiedArr.push(firstVal);
  return copiedArr;
}

rotateArray([7, 3, 5, 2, 9, 1]); // [3, 5, 2, 9, 1, 7]
rotateArray(["a", "b", "c"]); // ["b", "c", "a"]
rotateArray(["a"]); // ["a"]
rotateArray([1, "a", 3, "c"]); // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]); // [[1, 2], 3, { a: 2 }]
rotateArray([]); // []

// return `undefined` if the argument is not an array
rotateArray(); // undefined
rotateArray(1); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
rotateArray(array); // [2, 3, 4, 1]
*/

// 2.

// Input: two numbers. number and count
// Output: number

// Given a number and count
// Shift the digit at [count] spaces from the right to the end
// Return the transformed number
// Rightmost digit is at count 1, penultimate at count 2...
// Leftmost digit is at count = number.length
// digit index can be found with String(number).length - count

/*
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
*/

// GET number and count
// SET numberAsString to String(number)
// SET targetIndex to numberAsString.length - count
// SET targetDigit to numberAsString[targetIndex]
// Slice string into 2 pieces, excluding the target digit
// Concat the 2 pieces and add the target digit to the end
// RETURN Number(numberAsString)

/*
function rotateRightmostDigits(number, count) {
  let numberAsString = String(number);
  let targetIndex = numberAsString.length - count;
  let targetDigit = numberAsString[targetIndex];
  numberAsString =
    numberAsString.slice(0, targetIndex) +
    numberAsString.slice(targetIndex + 1);
  return Number(numberAsString + targetDigit);
}

console.log(rotateRightmostDigits(123456789, 3));
*/

// 3.
