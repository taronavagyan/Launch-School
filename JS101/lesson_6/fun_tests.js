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

let numbers = [1, 111, 1121, 113, 123434, 23, 12, 34];
console.log(numbers.sort((a, b) => a - b));
