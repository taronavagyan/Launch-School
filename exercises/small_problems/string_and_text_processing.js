// 1.

/*
function isUppercase(string) {
  return string === string.toUpperCase();
}

console.log(isUppercase("t"));
console.log(isUppercase("T"));
console.log(isUppercase("Four Score"));
console.log(isUppercase("FOUR SCORE"));
console.log(isUppercase("4SCORE!"));
console.log(isUppercase(""));
*/

// 2.

// GET array of strings
// SET result array to empty array
// For each string
//   replace a,e,i,o,u with empty space and push to result
// RETURN array of strings

/*
function removeVowels(arrayOfStrings) {
  return arrayOfStrings.map((string) => string.replace(/[a,e,i,o,u]/gi, ""));
}

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"]));
// ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"]));
// ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"]));
// ["BC", "", "XYZ"]
*/

// 3.

/*
function letterCaseCount(string) {
  let chars = string.split("");
  let caseCounter = {};

  caseCounter.lower = chars.filter(
    (char) => char === char.toLowerCase() && char.match(/[a-z]/i)
  ).length;
  caseCounter.uppercase = chars.filter(
    (char) => char === char.toUpperCase() && char.match(/[a-z]/i)
  ).length;
  caseCounter.neither = chars.filter((char) => !char.match(/[a-z]/i)).length;

  return caseCounter;
}

letterCaseCount("abCdef 123"); // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount("AbCd +Ef"); // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount("123"); // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount(""); // { lowercase: 0, uppercase: 0, neither: 0 }
*/

// 4.

// GET sentence as a string
// Split string into array of words
// Split words into array of chars
// Capitalize first letter of chars
// Join chars back into word
// Join words back into string
// Return capitalized sentence

/*
function wordCap(sentence) {
  let words = sentence.split(" ");
  words = words.map(
    (word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
  );
  return words.join(" ");
}

wordCap("four score and seven"); // "Four Score And Seven"
wordCap("the javaScript language"); // "The Javascript Language"
wordCap('this is a "quoted" word'); // 'This Is A "quoted" Word'
*/

// 5.

// get string
// split string into array of chars
// for char of chars
//   if char is equal to char.toUpperCase(), make it lowercase
//   else make it uppercase
// join chars into string and return

/*
function swapCase(string) {
  let chars = string.split("");
  for (let idx = 0; idx < chars.length; idx += 1) {
    let char = chars[idx];
    chars[idx] =
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }
  return chars.join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
*/

// 6.

// GET string
// convert string to lowercase
// split string into array of chars
// for each char
//   if the char is at an even index, capitalize it
// join array of chars and return

/*
function staggeredCase(string) {
  return string
    .toLowerCase()
    .split("")
    .map((char, idx) => (idx % 2 === 0 ? char.toUpperCase() : char))
    .join("");
}
staggeredCase("I Love Launch School!"); // "I LoVe lAuNcH ScHoOl!"
staggeredCase("ALL_CAPS"); // "AlL_CaPs"
staggeredCase("ignore 77 the 4444 numbers"); // "IgNoRe 77 ThE 4444 nUmBeRs"
*/

// 7.

// GET string
// SET alphabeticIndex to 0
// convert string to lowercase
// split string into array of chars
// for each char
// if char is alphabetic, increment alphabeticIndex
// if alphabeticIndex is even, capitalize char
// join chars and return

/*
function staggeredCase(string) {
  let alphabeticIndex = 0;
  let chars = string.toLowerCase().split("");

  for (let idx = 0; idx < chars.length; idx += 1) {
    if (chars[idx].match(/[a-z]/)) {
      if (alphabeticIndex % 2 === 0) {
        chars[idx] = chars[idx].toUpperCase();
      }
      alphabeticIndex += 1;
    }
  }

  return chars.join("");
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);
*/

// 8.

// GET string
// SET result to an empty array
// SET words to string split into array of words
// SET wordlengths to word length of each word in words
// for each word of words
//   push (word + " " wordlength[currentindex]) to result
// RETURN result

/*
function wordLengths(string = []) {
  if (string.length === 0) {
    return [];
  }

  return string.split(" ").map((word) => word + " " + word.length);
}

wordLengths("cow sheep chicken");
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths("baseball hot dogs and apple pie");
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths("Supercalifragilisticexpialidocious");
// ["Supercalifragilisticexpialidocious 34"]

wordLengths(""); // []
wordLengths(); // []
*/

// 9.

/*
function searchWord(target, text) {
  let occurences = 0;
  let words = text.toLowerCase().split(" ");

  for (let word of words) {
    if (word === target) {
      occurences += 1;
    }
  }
  return occurences;
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

console.log(searchWord("sed", text)); // 3
*/

// 10.

/*
function searchWord(target, text) {
  let words = text.split(" ");

  for (let idx = 0; idx < words.length; idx += 1) {
    if (words[idx].toLowerCase() === target) {
      words[idx] = "**" + target.toUpperCase() + "**";
    }
  }

  return words.join(" ");
}

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?";

console.log(searchWord("sed", text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"
*/
