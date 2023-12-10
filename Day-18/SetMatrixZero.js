/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const row = matrix.length;
  const col = matrix[0].length;
  const tempR = new Array(row).fill(-1);
  const tempC = new Array(col).fill(-1);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] == 0) {
        tempR[i] = 0;
        tempC[j] = 0;
      }
    }
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (tempR[i] == 0 || tempC[j] == 0) matrix[i][j] = 0;
    }
  }
};
