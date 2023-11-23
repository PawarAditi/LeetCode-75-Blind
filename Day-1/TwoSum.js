/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const index = new Map();
  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];
    if (index.has(rem)) {
      return [index.get(rem), i];
    }
    index.set(nums[i], i);
  }
};
