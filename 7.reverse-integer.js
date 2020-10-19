/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNagetive = false
  if (x < 0) {
    isNagetive = true
    x = -x
  }
  let result = x.toString().split('').reverse().join('')
  return isNagetive
    ? -result > -Math.pow(2, 31)
      ? -result
      : 0
    : result < Math.pow(2, 31) - 1
    ? result
    : 0
}
// @lc code=end
