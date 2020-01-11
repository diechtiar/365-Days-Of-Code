function cmp (a, b) { return a - b; }

function solution (A, B) {
  var n = A.length;
  var m = B.length;
  A.sort(cmp);
  B.sort(cmp);
  console.log(A);
  console.log(B);
  var i = 1;
  for (var k = 0; k < n; k++) {
    if (i < m - 1 && B[i] <= A[k]) { 
      console.log(A[k], B[i]);
      i += 1; }
    
    if (A[k] == B[i]) { return A[k]; }
  }
  return -1;
}

console.log(solution([1, 6, 7, 8, 9, 10], [1, 0, 0, 5, 6]));
