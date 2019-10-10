/*
 * Find the missing letter in the passed letter range and return it.

 * If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i+1) - str.charCodeAt(i) === 2) {
      return String.fromCodePoint(str.charCodeAt(i) + 1);
    } 
  }

  return undefined;
}

console.log(fearNotLetter("abce")); // -> d
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // -> undefined
