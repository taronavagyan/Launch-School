// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

////////

// Understand the Problem:
// what if input isn't a string?

// input: string
// output: array of substring palindromes

// rules:
//   explicit: return all substring palindromes
//             case sensitive
//             function called palindromeSubstrings

//   implicit: return in an array
//             empty string returns empty array
//

// Algorithm:
//  - declare a result variable and initialize it to an empty array
//  - create an array named substrArray that contains all of the
//    substrings of the input string that are at least 2 characters long.
// Above step (cont.)
/*
for each starting index from 0 through the next to last index position
  for each substring length from 2 until there are no substrings of that length
    extract the substring of the indicated length starting at the indicated index position
  end of inner loop
end of outer loop
*/

//  - loop through the words in the substrArray array.
//  - if the word is a palindrome, append it to the result
//    array
//  - return the result array

function palindromeSubstrings(str) {
  let result = [];
  let substringsArr = substrings(str);

  substringsArr.forEach((substring) => {
    if (isPalindrome(substring)) {
      result.push(substring);
    }
  });

  return result;
}
