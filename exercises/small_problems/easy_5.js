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

// 4.

/*
function findDup(array) {
  while (array.length > 1) {
    let currValue = array.shift();
    if (array.includes(currValue)) {
      return currValue;
    }
  }
  return undefined;
}

findDup([1, 5, 3, 1]); // 1
findDup([
  18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11, 88, 67, 5, 58,
]); // 73
*/

// 5.

/*
function interweave(array1, array2) {
  let resultArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    result.push(array1[idx], array2[idx]);
  }

  return resultArray;
}

console.log(interweave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
*/

// 6.

/*
function multiplicativeAverage(arrayOfInts) {
  return (
    arrayOfInts.reduce(
      (runningCount, currentInt) => runningCount * currentInt,
      1
    ) / arrayOfInts.length
  ).toFixed(3);
}

console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
*/

// 7.

/*
function multiplyList(array1, array2) {
  let newArray = [];

  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx] * array2[idx]);
  }
  return newArray;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
*/

// 8.

/*
function digitList(number) {
  let digitsList = [];
  while (number) {
    let digit = number % 10;
    digitsList.unshift(digit);
    number = (number - digit) / 10;
  }

  return digitsList;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]
*/

// 9.

/*
let vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "motorcycle",
  "car",
  "truck",
];

function countOccurrences(array) {
  let count = {};

  for (let value of array) {
    count[value] = count[value] || 0;
    count[value] += 1;
  }

  logOccurences(count);
}

function logOccurences(occurences) {
  for (let key in occurences) {
    console.log(`${key} => ${occurences[key]}`);
  }
}
countOccurrences(vehicles);
*/

// 10.

/*
const average = (arrayOfInts) =>
  Math.floor(
    arrayOfInts.reduce((runningSum, currInt) => runningSum + currInt, 0) /
      arrayOfInts.length
  );

console.log(average([1, 5, 87, 45, 8, 8]));
console.log(average([9, 47, 23, 95, 16, 52]));
*/

// 11.

/*
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAY_IN_MINUTES = MINUTES_PER_HOUR * HOURS_PER_DAY;

function timeOfDay(minutesSinceMidnight) {
  let timeInMinutes = removeExtraCycles(minutesSinceMidnight);

  if (timeInMinutes < 0) {
    timeInMinutes += DAY_IN_MINUTES;
  }

  let minutes = padZeros(timeInMinutes % MINUTES_PER_HOUR);
  let hours = padZeros(Math.floor(timeInMinutes / MINUTES_PER_HOUR));
  return `${hours}:${minutes}`;
}

function removeExtraCycles(minutes) {
  let charge = minutes > 0 ? 1 : -1;
  minutes *= charge;
  while (minutes - DAY_IN_MINUTES >= 0) {
    minutes -= DAY_IN_MINUTES;
  }

  minutes *= charge;
  return minutes;
}

function padZeros(number) {
  return String(number).length === 1 ? "0" + number : number;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
*/

// 12.

/*
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const DAY_IN_MINUTES = MINUTES_PER_HOUR * HOURS_PER_DAY;

function afterMidnight(time) {
  let hrsAndMins = time.split(":");
  //prettier-ignore
  let totalMins = (hrsAndMins[0] * MINUTES_PER_HOUR) + Number(hrsAndMins[1]);
  return totalMins % DAY_IN_MINUTES;
}

function beforeMidnight(time) {
  return (DAY_IN_MINUTES - afterMidnight(time)) % DAY_IN_MINUTES;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);
*/
