/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
  try {
    if (a > 0) console.log('YES');
    if (a == 0) throw new Error('Zero Error');
    if (a < 0) throw new Error ('Negative Error');
  }
  catch(e) {
    console.error(e.message);
  }

}

isPositive(2);
isPositive(0);
isPositive(-3);