/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let maxP = 0;
  let profit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
    } else {
      left = right;
    }
    right++;
    maxP = Math.max(profit, maxP);
  }
  return maxP;
};
