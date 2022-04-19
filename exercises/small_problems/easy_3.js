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

function logInBox(text) {
  let topAndBottom = `+${"-".repeat(text.length + 2)}+`;
  let emptyLine = `|${" ".repeat(text.length + 2)}|`;

  console.log(topAndBottom);
  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(topAndBottom);
}

logInBox("i love to go to 6flags");
