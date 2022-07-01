/* LeetCode #15 - 3Sum
https://leetcode.com/problems/3sum/

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that 
i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-10*5 <= nums[i] <= 10*5

------Code -------

// Check length of nums
// If nums < 3, then output = []
// Else
// 	Sort nums array least to greatest (-10*5, 10*5)
// Set points L, R at array[0] and array[length - 1]
// sum = nums[i] + nums[l] + nums[r]
check if sum === 0
if so, then add to output, advance l 



*/

var threeSum = function (nums) {
    output = []; // Found triplets
    len = nums.length;
    if (len >= 3) {
        nums = nums.sort((a, b) => a - b); // sort the array
        // console.log(nums); // console sorted array

        // itearte over the array
        for (let i = 0; i < len; i++) {
            // skip duplicate starting values
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }

            // set left and right pointers
            let l = i + 1; // left pointer
            let r = len - 1; // right pointer

            // check for triplets
            while (l < r) {
                sum = nums[i] + nums[l] + nums[r];
                if (sum === 0) {
                    output.push([nums[i], nums[l], nums[r]]);
                    // console.log('triplet found')
                    // console.log(output);
                    l++;

                    // avoid duplicate starting values for left pointer
                    while (l < r && nums[l] === nums[l -1]) {
                        // console.log('duplicate value: ', nums[l], nums[l-1])
                        l++;
                    }
                } else if (sum < 0) { // if sum is negative, increase left pointer to be less negative
                    l++;
                } else { // if sum is more than zero, decrease right pointer
                    r--;
                }
            }
        }
        return output

    } else {
        // If Array is less than 3 long, return empty array
        return output;
    }

};

console.log(threeSum([1, 2, -3]));
