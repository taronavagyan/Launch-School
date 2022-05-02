let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddIndices(myNumbers)); // => [1, 8, 3, 14, 2, 12]

// not mutated
console.log(myNumbers); // => [1, 4, 3, 7, 2, 6]

function doubleOddIndices(numbers) {
  let result = [];
  for (let idx = 0; idx < numbers.length; idx += 1) {
    if (idx % 2 === 1) {
      result.push(numbers[idx] * 2);
    } else {
      result.push(numbers[idx]);
    }
  }
  return result;
}
