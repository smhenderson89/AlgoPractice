/* 
https://leetcode.com/problems/move-zeroes/

LC0238

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:

Input: nums = [0]
Output: [0]
 
Constraints:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 
Follow up: Could you minimize the total number of operations done?

*/

/* 
- Sliding Window style problem, look at indivdual indexes, switch and then move the sliding window
- Could also two pointers
*/

/* 
[0,1,0,3,12]
let left // look for 1st non zero
let right // 1st non zero after left pointer

// if left and right has a zero, then move to the right
// if both left and right has a zero, expand the window

    
Solution:
    - If right point != 0 & left point == 0, then swap, then advance pointers
    - If left & right pointer == 0, then move right pointer until reaches next # != 0
    - check that left point has reached array length -1, then complete


EdgeCase     

if array length is only 1, then don't do any swaps. 
*/

var moveZeroes = function(nums) {
    l = nums.length;
    if (l > 1) {
        // console.log(`[${nums}]`);
        let left = 0; // left pointer
        let right; // right pointer
        let tempVal = 0;
        while (left < (l-1)) {
            // Find first case of non-zero right point 
            while (nums[left] != 0 && left < l) {
                left++;
            } 

            // If left point has reached end of array, return array as is
            if (left == l) {
                console.log(`Limit of array, ${nums}`);
                return nums
            }

            // Find starting element
            // console.log(`Found zero element: ${nums[left]} at ${left}th index`);
            right = left; // Set left & right pointer as same index;

            // Advance right point to next zero element
            while (nums[right] == 0 && right < (l-1)) {
                right++
            }

            // Check if reached end of the array and all zeros sorted
            if(nums[left] == 0 && nums[right] == 0) { // 
                // console.log('Swapped array')
                console.log(nums);
                return nums;
            } else {
                // Found starting point for right pointer
                // console.log(`Found non-zero element: ${nums[right]} at ${right}th index`);

                // Swap left and right pointer value
                tempVal = nums[left];
                nums[left] = nums[right];
                nums[right] = tempVal;

                // console.log(`new swap: [${nums}]`);

                // Advance left pointer one space 
                left++;

            }
        }
        console.log(`swapped array: ${nums}`)
        return nums;

    } else {
        console.log(`No change: ${nums}`)
        return nums
    }
    
};

// nums = [2,1];
nums = [0,1,0,3,12]
// nums = [1,1,0,3,0,0,-5,12,0,0,0,0,0,5];
// nums = [0]
moveZeroes(nums);