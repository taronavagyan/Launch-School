// 1. Get two strings
// 2. Create a result array
// 3. Loop through each characters of the first string and check
//    if the other string contains the character
// 4. If it does, continue. if it doesn't, add it to the result array
// 5. Do steps 3 and 4 with the second string
// 6. Return result array

function uniqueStringCharacters(string1, string2) {
  let result = [];

  for (let char of string1) {
    if (!string2.includes(char)) {
      result.push(char);
    }
  }

  for (let char of string2) {
    if (!string1.includes(char)) {
      result.push(char);
    }
  }

  return result.join("");
}
console.log(uniqueStringCharacters("a", "z"));
