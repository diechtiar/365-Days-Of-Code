/*
 * Create the function factorial here
 */

function factorial(number) {

  var f = 1;

  for (let i = number; i > 0; i--) {
    f = f * i;
  }
  return f;
}

console.log(factorial(10));