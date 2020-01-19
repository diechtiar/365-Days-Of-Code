/*
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
 */

function sumFibs(num) {

  let sequence = [1, 1];
  let result = 0;

  for (let i = 1; i < num; i++) {
    if (((sequence[i-1] + sequence[i]) <= num)) {
      sequence.push(sequence[i-1] + sequence[i]);
    } 
  }
  console.log(sequence);
  sequence.forEach(number => {
    if (number % 2) {
      result = result + number;
    }
  });
 
  return result;
}

console.log(sumFibs(10)); // -> 10 (because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.)

console.log(sumFibs(1000)); // -> 1785
console.log(sumFibs(4000000)); // -> 4613732
console.log(sumFibs(75024)); // -> 60696
console.log(sumFibs(75025)); // -> 135721