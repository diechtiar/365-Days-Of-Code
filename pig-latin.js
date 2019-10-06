/*
translatePigLatin("california")should return "aliforniacay".
translatePigLatin("paragraphs")should return "aragraphspay".
translatePigLatin("glove")should return "oveglay".
translatePigLatin("algorithm")should return "algorithmway".
translatePigLatin("eight")should return "eightway".
Should handle words where the first vowel comes in the end of the word.
Should handle words without vowels.
*/


function translatePigLatin(str) {
  
  let pigStr = '';
  let vowelAt = str.search(/[aeiou]/g);

  if (vowelAt < 0) {
    pigStr = str;
  } else if (vowelAt == 0) {
    pigStr = str + "w";
  } else {
    pigStr = str.slice(vowelAt) + str.slice(0, vowelAt);
  }

  return pigStr + "ay";
}

console.log("consonant => ", translatePigLatin("consonant"));
console.log("algorithm => ", translatePigLatin("algorithm"));
console.log("eight => ", translatePigLatin("eight"));
console.log("glove => ", translatePigLatin("glove"));
console.log("gldve => ", translatePigLatin("gldve"));
console.log("gldwx => ", translatePigLatin("gldwx"));


