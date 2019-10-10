function regexVar(s) {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  
   let re = /(?<=^a[a-z]*)[a]$|(?<=^e[a-z]*)[e]$|(?<=^i[a-z]*)[i]$|(?<=^o[a-z]*)[o]$|(?<=^u[a-z]*)[u]$/;
  
  /*
   * Do not remove the return statement
   */
  return re.test(s);
}

console.log(regexVar('abcda')); // -> true
console.log(regexVar('eecda')); // -> false
console.log(regexVar('becdb')); // -> false

