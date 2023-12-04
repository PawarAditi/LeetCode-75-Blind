var missingNumber = function (nums) {
  let sum = (nums.length * (nums.length + 1)) / 2;
  let tempSum = 0;
  for (let i = 0; i < nums.length; i++) {
    tempSum = nums[i] + tempSum;
  }
  return sum - tempSum;
};
