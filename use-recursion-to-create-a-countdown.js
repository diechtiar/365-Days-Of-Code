/* 
 * After calling countdown(myArray, -1), myArray should be empty.
 * After calling countdown(myArray, 10), myArray should contain [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 * After calling countdown(myArray, 5), myArray should contain [5, 4, 3, 2, 1] 
 */

function countdown(myArray, n) {

  if (n <= 1) {
    if (n > 0) { 
      return [n];
    } else {
      return [];
    }
  } else {
    let result = countdown(myArray, n - 1);
    result.push(n);
    return result;
  }

  return [];
}

console.log(countdown([], 20));

/* 
 * countdown([], 5)
 *   countdown([], 4)
 *     countdown([], 3)
 *       countdown([], 2)
 *         countdown([], 1)
 *         return [1]
 *       return [1, 2]
 *     return [1, 2, 3]
 *   return [1, 2, 3, 4]
 * return [1, 2, 3, 4, 5] 
 */