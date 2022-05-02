function doubleNumbers(numbers) {
  for (let count = 0; count < numbers.length; count += 1) {
    numbers[count] *= 2;
  }
  return numbers;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers));
console.log(myNumbers);
