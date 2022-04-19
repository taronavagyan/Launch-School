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
// eslint-disable-next-line max-lines-per-function
function logInBox(text, maxLength) {
  //prettier-ignore
  let length = (text.length + 2) > maxLength ? maxLength : (text.length + 2);
  let topAndBottom = `+${"-".repeat(length)}+`;
  let emptyLine = `|${" ".repeat(length)}|`;
  let words = text.split(" ");
  let lines = [];
  let currentLineLength = 0;
  let currentLine = "";
  for (let word of words) {
    if (currentLineLength + word.length < maxLength - 20) {
      currentLine += word + " ";
      currentLineLength += word.length;
    } else {
      lines.push(currentLine);
      currentLine = word + " ";
      currentLineLength = 0;
    }
  }

  lines.push(currentLine);

  console.log(topAndBottom);

  console.log(emptyLine);
  for (let line of lines) {
    console.log(`| ${line}${" ".repeat(length - line.length - 1)}|`);
  }

  console.log(emptyLine);
  console.log(topAndBottom);
}

logInBox(
  // eslint-disable-next-line max-len
  "For a challenging but fun exercise, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box. This isn't an easy problem, but it's doable with basic JavaScript.",
  50
);
*/

//3

/*
function stringy(int) {
  let stringyString = "";
  for (let count = 1; count <= int; count += 1) {
    let number = count % 2 === 1 ? 1 : 0;
    stringyString += number;
  }
  return stringyString;
}

console.log(stringy(6));
*/
