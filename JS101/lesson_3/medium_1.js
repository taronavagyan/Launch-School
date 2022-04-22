// 1.

/*
function tenXWithIndents(string) {
  for (let padding = 0; padding < 10; padding += 1) {
    console.log(" ".repeat(padding) + string);
  }
}

tenXWithIndents("The Flintstones Rock!");
*/

// 2.

/*
let munstersDescription = "The Munsters are creepy and spooky.";

function swapCasing(text) {
  let chars = text.split("");
  let stringSwappedCasing = [];
  for (let char of chars) {
    let swappedChar =
      char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    stringSwappedCasing.push(swappedChar);
  }
  return stringSwappedCasing.join("");
}

console.log(swapCasing(munstersDescription));
*/
