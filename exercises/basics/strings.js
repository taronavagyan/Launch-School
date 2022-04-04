// 1.

/* console.log("These aren't the droids you're looking ofr.".length); */

// 2.

/* console.log("confetti floating everywhere".toUpperCase()); */

// 3.

/*
function repeat(times, string) {
  let result = "";
  for (let i = 0; i < times; i += 1) {
    result = result.concat(string);
  }
  return result;
}

console.log(repeat(3, "ha"));
console.log(repeat(4, "ho"));
*/

// 4.

/*
let string = "A pirate I was meant to be!\nTrim the sails and roam the sea!";
console.log(string);
*/

// 5.

/* use .toLowerCase() to make their cases the same, then compare with === */

// 6.

/*  
let byteSequence = "TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu";
console.log(byteSequence.includes("x"));
*/

// 7.

/*
function isBlank(string) {
  return string === "";
}

console.log(isBlank("mars")); // false
console.log(isBlank("  ")); // false
console.log(isBlank("")); // true
*/

// 8.

/*
function isBlank(string) {
  return string.trim().length === 0;
}

console.log(isBlank("mars")); // false
console.log(isBlank("  ")); // false
console.log(isBlank("")); // true
*/

// 9.

/*
function capitalize(string) {
  let words = string.split(" ");
  let result = "";
  for (let word of words) {
    let capitalizedWord = word[0].toUpperCase() + word.substring(1);
    result = result.concat(capitalizedWord) + " ";
  }
  return result;
}
console.log(capitalize("launch school & tech talk"));
*/
