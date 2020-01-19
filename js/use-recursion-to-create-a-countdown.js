/* 
 * After calling countdown(myArray, -1), myArray should be empty.
 * After calling countdown(myArray, 10), myArray should contain [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
 * After calling countdown(myArray, 5), myArray should contain [5, 4, 3, 2, 1] 
 */
someArray = [];

function countdown(myArray, n) {

  if (n < 1) {
    if (n > 0) { 
      myArray = [n];
    } else {
      return [];
    }
  } else {
    countdown(myArray, n - 1);
    myArray.unshift(n);
    return myArray;
  }
}

countdown(someArray, 5);

console.log(someArray);

/* 
 * countdown([], 5)
 *   countdown([], 4)
 *     countdown([], 3)
 *       countdown([], 2)
 *         countdown([], 1)
 *         return [1]
 *       return [2, 1]
 *     return [3, 2, 1]
 *   return [4, 3, 2, 1]
 * return [5, 4, 3, 2, 1] 
 */