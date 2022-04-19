// 1.

/*
function crunch(string) {
  let crunchedString = "";
  let activeChar = "";
  for (let char of string) {
    if (char !== activeChar) {
      crunchedString += char;
      activeChar = char;
    }
  }
  return crunchedString;
}

crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
*/

// 2.

/*
function logInBox(text) {
  let bars = "";
  let emptySpace = "";
  for (let count = 0; count < text.length; count++) {
    bars = bars.concat("-");
    emptySpace = emptySpace.concat(" ");
  }
  console.log(`+ ${bars} +`);
  console.log(`| ${emptySpace} |`);
  console.log(`| ${text} |`);
  console.log(`| ${emptySpace} |`);
  console.log(`+ ${bars} +`);
}

logInBox("i love to go to 6flags");
*/
