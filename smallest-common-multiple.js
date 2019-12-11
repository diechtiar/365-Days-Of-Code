/*
 *Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
 */

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);

  let scm = arr[0] * arr[1];
  let range = [];

  for (let i = arr[0] + 1; i <= arr[1] - 1; i++) {
    range.push(i);
  }

  while ((range.some(value => scm % value))) {
    if (range.some(value => scm % value)) {
      scm = scm + arr[1];
    }
  }

  return scm;

}

console.log(smallestCommons([2, 4]));
