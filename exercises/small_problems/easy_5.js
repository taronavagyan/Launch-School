// 1.

/*

const SINGLE_UNIT = 1;
const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;

function dms(number) {
  let degrees = Math.floor(number / 1);
  let minutes = (number % SINGLE_UNIT) * MINUTES_PER_DEGREE;
  let seconds = (minutes % SINGLE_UNIT) * SECONDS_PER_MINUTE;

  minutes = padZeros(minutes);
  seconds = padZeros(seconds);

  console.log(`${degrees}${DEGREE}${minutes}'${seconds}"`);
}

function padZeros(number) {
  number = String(Math.floor(number));
  return number.length === 1 ? `0${number}` : number;
}

dms(30); // 30°00'00"
dms(76.73); // 76°43'48"
dms(254.6); // 254°35'59"
dms(93.034773); // 93°02'05"
dms(0); // 0°00'00"
dms(360); // 360°00'00" or 0°00'00"
*/

// 2.

/*
function union(array1, array2) {
  let jointArray = array1.concat(array2);

  return uniqueValuesOnly(jointArray);
}

function uniqueValuesOnly(array) {
  let result = [];
  for (let value of array) {
    if (result.indexOf(value) === -1) {
      result.push(value);
    }
  }
  return result;
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
*/

// 3.

/*
function halvsies(array) {
  let arrayHalves = [];
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  arrayHalves.push(firstHalf, secondHalf);
  return arrayHalves;
}

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]
*/
