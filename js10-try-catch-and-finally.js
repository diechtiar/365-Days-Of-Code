/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
  try {
    let string = '';
    let sArr = [];
    
    sArr = s.split('');
    string = sArr.reverse().join('');
    console.log(string);

  } catch (error) {
    console.log(error.message);
    console.log(s);
  }
}

reverseString("1234");
reverseString(Number(1234));