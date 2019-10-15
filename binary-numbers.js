/*
 * Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1's in n's binary representation.
 *
 */

function main() {
  const n = parseInt(readLine(), 10);
  let binary = n.toString(2);
  let ones = 0;
  let maxOnes = 0;

  for (let i = 0; i < binary.length; i++) {
      
      if (binary[i] == 1) {
          maxOnes = maxOnes + 1;
          
      } else {
          if (maxOnes > ones) {
              ones = maxOnes;
          }
          maxOnes = 0;
      }
  }
  console.log(ones);
}
