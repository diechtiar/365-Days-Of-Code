/*
Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, s, consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

First, print each vowel in s on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in s.

Input Format

Locked stub code in the editor reads string s from stdin and passes it to the function.

Output Format

First, print each vowel in s on a new line (in the same order as they appeared in s). Second, print each consonant (i.e., non-vowel) in s on a new line (in the same order as they appeared in s).
*/

function vowelsAndConsonants(s) {

  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter = 0; letter < s.length; letter++) {

    vowels.forEach(vowel => {
      if (s.charAt(letter) === vowel) {
        console.log(vowel);
      }
    });

  }

  for (let letter = 0; letter < s.length; letter++) {

    if (! vowels.includes(s.charAt(letter))) {
      console.log(s.charAt(letter));
    }

  }

}

vowelsAndConsonants('javascriptloops');