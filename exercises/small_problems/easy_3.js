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

// eslint-disable-next-line max-lines-per-function
function logInBox(text, maxLength) {
  //prettier-ignore
  let length = (text.length + 2) > maxLength ? maxLength : (text.length + 2);
  let topAndBottom = `+${"-".repeat(length)}+`;
  let emptyLine = `|${" ".repeat(length)}|`;
  if (text.length > maxLength) emptyLine = maxLength;
  let words = text.split(" ");
  let lineLength = 0;
  let lineBreaks = [];

  for (let word of words) {
    if (lineLength + word.length >= maxLength) {
      lineBreaks.push(word);
      lineLength = 0;
    } else {
      lineLength += word.length;
    }
  }

  console.log(topAndBottom);

  console.log(emptyLine);
  console.log(`| ${text} |`);
  console.log(emptyLine);
  console.log(topAndBottom);
}

logInBox(
  "For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript",
  50
);
