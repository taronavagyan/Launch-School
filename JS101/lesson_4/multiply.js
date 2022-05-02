let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [3, 12, 9, 21, 6, 18]

function multiply(numbers, multiplier) {
  let result = [];

  for (let number of numbers) {
    result.push(number * multiplier);
  }
  return result;
}
