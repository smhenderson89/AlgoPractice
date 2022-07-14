/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

2 <= nums.length <= 10**4
-10**9 <= nums[i] <= 10**9
-10**9 <= target <= 10**9
Only one valid answer exists.


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    // Determine the index of the numbers that equal the target
    
    // For loop over the array
    // Take i, check the remaining elements in the array if sum - i = element
    //      Increase i, then check remaining part of the array (but not i -1)
    
    l = nums.length
    for (let i = 0; i < l; i++) { // Loop over array
        num1 = nums[i] // Save number
        for (let j = i + 1; j < l; j++) { // Iterate over remaing numbers in array
            if ((target - num1) == nums[j]) { // if nums[i] and nums[j] == target, success!
                return [i, j]
            }
        }
    }
};

console.log(twoSum([3,3], 6));