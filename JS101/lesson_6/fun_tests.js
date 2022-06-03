/*
while (true) {
  let num = Math.floor(Math.random() * 10000000);
  console.log(num);
  if (num === 0) {
    console.log("Got it!");
    break;
  }
}
*/

/*
let numbers = [1, 111, 1121, 113, 123434, 23, 12, 34];
console.log(numbers.sort((a, b) => a - b));
*/

/*
function collapseConsecutiveChars(string) {
  let chars = string.split("");
  let result = "";

  for (let idx = 0; idx < chars.length; idx += 1) {
    let currentChar = chars[idx];
    let nextChar = chars[idx + 1];
    if (currentChar !== nextChar) result += currentChar;
  }
  return result;
}

console.log(collapseConsecutiveChars("hoooo1111orsssse"));
*/
