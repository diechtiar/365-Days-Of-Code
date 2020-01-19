/*
 * Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
 * Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
 */

function dropElements(arr, func) {

  let result = [...arr];
  let cuttingPoint = result.length;

  arr.forEach((element, index) => {
    if (func(element) && cuttingPoint === result.length) {
      cuttingPoint = index;
    } 
  });

  // Drop them elements.
  result = result.slice(cuttingPoint);
//  console.log(result);
  return result;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; }); // -> [3, 4]
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); // -> [1, 0, 1]
