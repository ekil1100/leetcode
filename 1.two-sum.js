/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let second
  for (let i = 0; i < nums.length; i++) {
    second = target - nums[i]
    if (nums.slice(i + 1, nums.length).includes(second))
      return [i, nums.lastIndexOf(second)]
  }
}
// @lc code=end
