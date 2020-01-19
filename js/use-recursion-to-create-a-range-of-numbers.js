function rangeOfNumbers(startNum, endNum) {

  if (startNum >= endNum) {
    return [endNum];
  } else {
    var result = rangeOfNumbers(startNum, endNum - 1);
    result.push(endNum);
    return result;
  }

};

console.log(rangeOfNumbers(1, 5)) // should return [1, 2, 3, 4, 5]

/* 
 * rangeOfNumbers(1, 5) 
 *  rangeOfNumbers(1, 4) 
 *    rangeOfNumbers(1, 3) 
 *      rangeOfNumbers(1, 2) 
 *        rangeOfNumbers(1, 1) 
 *        returns 1 
 *      returns 2
 *    returns 3
 *  returns 4
 * returns 5
 */
    
