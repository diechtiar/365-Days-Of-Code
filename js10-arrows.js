/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
  return nums.map(item => {
    if (item % 2) {
      return item * 3;
    } else { 
      return item * 2;
    }
  });    
}