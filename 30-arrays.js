/*
 * Given an array, a, of n integers, print a's elements in reverse order as a single line of space-separated numbers.
 */

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    console.log(arr.reverse().join(' '));
}
