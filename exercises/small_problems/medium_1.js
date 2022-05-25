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

// Given a number
// Start each digit starting from the first digit
// and ending with the penultimate digit
// Return the max rotated digit

/*
function maxRotation(number) {
  for (
    let digitPlace = String(number).length;
    digitPlace > 1;
    digitPlace -= 1
  ) {
    number = rotateRightmostDigits(number, digitPlace);
  }

  return number;
}

function rotateRightmostDigits(number, count) {
  let numberAsString = String(number);
  let targetIndex = numberAsString.length - count;
  let targetDigit = numberAsString[targetIndex];
  numberAsString =
    numberAsString.slice(0, targetIndex) +
    numberAsString.slice(targetIndex + 1);
  return Number(numberAsString + targetDigit);
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
*/

// 4.

/*
// eslint-disable-next-line max-lines-per-function
function minilang(arg) {
  let stack = [];
  let register = 0;
  let args = arg.split(" ");
  for (let command of args) {
    switch (command) {
      case "PRINT":
        console.log(register);
        break;
      case "PUSH":
        stack.push(Number(register));
        break;
      case "POP":
        register = stack.pop();
        break;
      case "ADD":
        register += stack.pop();
        break;
      case "SUB":
        register -= stack.pop();
        break;
      case "MULT":
        register *= stack.pop();
        break;
      case "DIV":
        register = Math.floor(register / stack.pop());
        break;
      case "REMAINDER":
        register = Math.floor(register % stack.pop());
        break;
      default:
        register = Number(command);
    }
  }
  return register;
}

minilang("PRINT");
// 0

minilang("5 PUSH 3 MULT PRINT");
// 15

minilang("5 PRINT PUSH 3 PRINT ADD PRINT");
// 5
// 3
// 8

minilang("5 PUSH POP PRINT");
// 5

minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// 5
// 10
// 4
// 7

minilang("3 PUSH PUSH 7 DIV MULT PRINT");
// 6

minilang("4 PUSH PUSH 7 REMAINDER MULT PRINT");
// 12

minilang("-3 PUSH 5 SUB PRINT");
// 8

minilang("6 PUSH");
// (nothing is printed because the `program` argument has no `PRINT` commands)
*/
