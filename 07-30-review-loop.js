/*
 * Given a string, s, of length n that is indexed from 0 to n-1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.
 * Note: 0 is considered to be an even index.
 */

function processData(input) {
  //Enter your code here

    let oddIndexLetters = [],
        evenIndexLetters = [],
        words = input.split('\n');

    words.shift();

    words.forEach(function(word) {
        oddIndexLetters = [];
        evenIndexLetters = [];
        
        for (i = 0; i < word.length; i++) {
            if (i % 2) {
                evenIndexLetters.push(word[i]);
            } else {
                oddIndexLetters.push(word[i]);
            }
         }    
        
        console.log( oddIndexLetters.join('') + ' ' + evenIndexLetters.join(''));
    });
  
  

} 