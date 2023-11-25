/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];
  let tempSum = 0;
  for (let i of nums) {
    tempSum += i;
    if (sum < tempSum) {
      sum = tempSum;
    }
    if (tempSum < 0) {
      tempSum = 0;
    }
  }
  return sum;
};
