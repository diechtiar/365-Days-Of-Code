function rot13(str) { // LBH QVQ VG!

  const text = [];

  function convertChar (char) {
    if ((char.charCodeAt(0) >= 65) && (char.charCodeAt(0) <= 77)) {
      return String.fromCharCode(char.charCodeAt(0) + 13);
    } else if ((char.charCodeAt(0) >= 78) && (char.charCodeAt(0) <= 90)) {
      return String.fromCharCode(char.charCodeAt(0) - 13);
    } else {
      return char;
    }
  }
  
  for (const index in str) {
    text.push(convertChar(str[index]));
  }

  return text.join('');
}

// Change the inputs below to test
console.log(rot13("LBH QVQ VG!"));
