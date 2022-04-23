// 1.

/*
No, second() will return undefined. First will
return the object.
*/

// 2.

/*
{ first: [ 1, 2 ] }
*/

// 3.

/*

A)

one is: one
two is: two
three is: three

B)

one is: one
two is: two
three is: three

C)

one is: two
two is: three
three is: one
*/

// 4.

/*
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) return false;
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}
*/
