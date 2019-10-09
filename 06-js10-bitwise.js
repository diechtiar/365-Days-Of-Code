/* function getMaxLessThanK(n, k) {
  let result = 0;
  let bits;

  for (let a = n - 1; a > 0; a--) {
    for (let b = n; b > a; b--) {
      
      bits = parseInt(a.toString(2) & b.toString(2), 2);
      if (bits > result && bits < k) {
        result = bits;  
      }
    }
  }

  
  
  return result;
} */ 

// O(N^2) because of two nested for loops

function getMaxLessThanK(n, k) {
  let last = 0;
  let current = 0;

  let a = 1;
  let b = 1;

  for (;(a < n) || (b < n);) {
    if (b < n) {
      b++;
    } else {
      b = a + 2;
      a++;
    }
    if (last < (a & b) && (a & b) < k) {
      last = current;
      current = a & b;
    }
  
  }

  return current;
  
}

// O(1)

console.log(getMaxLessThanK(8, 5));
