/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  let max = nums[0];
  let lastMax = nums[0];

  nums.sort((a, b) => a - b).forEach( item => {

    if (item > max) {
      lastMax = max;
      max = item;
    }
    console.log(max, lastMax);
  });

  return lastMax;
  
}

//console.log(getSecondLargest([2, 3, 6, 6, 5]));
console.log(getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));