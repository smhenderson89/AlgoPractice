/* 704. Binary Search

Given an nums of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 

Constraints:

1 <= nums.length <= 10**4
-10**4 < nums[i], target < 10**4
All the integers in nums are unique.
nums is sorted in ascending order.

test cases

[-1,0,3,5,9,12], 0 -> index at 1
[-1,0,3,5,9,12], 9 -> index at 4
[-1,0,3,5,9,12], 2 -> DNE in array, return -1



*/

var search = function(nums, target) {
    // nums is sorted nums
    // target equal target number
    // edge case, if nums.length = 1

    if (nums.length === 1) {
        if (nums[0] == target) {
            return 0
        } else {
            return -1
        }

    } else {
        var min = 0;
        var max = nums.length - 1
        var guess = Math.floor((min + max) / 2)

        while (min < max) {
            // check if nums[guess] or boundary value, nums[min] or nums[max]
            // if so, then found target, return index at the array
            if (nums[guess] == target || nums[min] == target || nums[max] == target) {
                if (nums[guess] == target) {
                    // If guess index equal target, return index 
                    return guess
                } else if (nums[min] == target) {
                    return min
                } else {
                    return max
                }
            } else if (nums[guess] < target) {
                // if nums[guess] < target, adjust nums to be at min = guess + 1
                min = guess + 1
                guess = Math.floor((min + max) / 2)
            } else {
                // If nums[guess] > target, adjust new search to be at max = guess -1
                max = guess - 1
                guess = Math.floor((min + max) / 2)
            }
        }
        // if limits of binary search nums are equal, then target not within the nums
        // return -1
        return -1
    }
};

console.log(search([2,5], 5))

