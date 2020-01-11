function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let arr = Array.from(A);
  let flipCount = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] == 0) {
      if ((arr[i - 1] != 1) || (arr[i + 1] != 1)) {
        flipCount++;
      }
    }

    if (arr[i] == 1) {
      if ((arr[i - 1] != 0) || (arr[i + 1] != 0)) {
        flipCount++;
      }
    }    
  }

  return flipCount;
}
/*
[1, 0, 1, 0, 1, 1]
[1, 0, 1, 0, 1, 0]

[1, 1, 0, 1, 1]
[0, 1, 0, 1, 0]

[0, 1, 1, 0]
[0, 1, 0, 1]
*/

console.log(solution([1, 0, 1, 0, 1, 1])); // should return 1
console.log(solution([1, 1, 0, 1, 1])); // should return 2
console.log(solution([0, 1, 1, 0])); // should return 2
console.log(solution([0, 1, 0, 1])); // should return 0
