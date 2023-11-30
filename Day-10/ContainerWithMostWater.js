/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let max_area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(height[right], height[left]);
    max_area = Math.max(max_area, area);
    if (height[left] < height[right]) left++;
    else right--;
  }
  return max_area;
};
