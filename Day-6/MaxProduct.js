/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let product = -Infinity;
  let max = 1;
  let min = 1;
  for (let i = 0; i < nums.length; i++) {
    const currentMax = Math.max(max * nums[i], min * nums[i], nums[i]);
    min = Math.min(min * nums[i], max * nums[i], nums[i], 1);
    max = currentMax;
    product = Math.max(product, min, max);
  }
  return product;
};
