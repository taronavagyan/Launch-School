function doubleNumbers(numList) {
  for (let count = 0; count < numList.length; count += 1) {
    numList[count] *= 2;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleNumbers(myNumbers));
console.log(myNumbers);
