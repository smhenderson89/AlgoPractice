/* 152. Maximum Product Subarray
Link: https://leetcode.com/problems/maximum-product-subarray/

Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 10*4
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.


----------------------------Code----------------------------

// Find the largest product of an array that is contagious. Output must be the product of at least two numbers.



// Check if len.array < 2
	// else, maxP = nums[0]
// Set maxProduct = max value of nums array;
// Set localProduct = 0;
// For each index of the array (excluding last-ith value)
// localProduct += localProduct * nums[i]
	// if localProduct > maxProduct
		// maxProduct = localProduct
	// else if localProduct < 0
		// set localProduct = 0


[2,3,-2,4]

MaxP = 4
1) localP = 2 * 3, 6
local > MaxP, MaxP = 6
2) localP = 6 * -2, -12,
localP < 0, -> localP = 0
3) localP = -2 * 4 -> -8,
localP < 0, -> localP = 0
4) localP = 4, 4 < 6 -> MaxP = 6

[-2,0,-1]
MaxP = 0
1) localP = -2 * 0, 0
localP == MaxP, MaxP continues to be 0
2) localP = 0 * -1, 0
localP == MaxP, MaxP conitnues to be 0, return 0

[-1, -2]
MaxP = -2
1) localP = -1 * -2 -> 2
localP > MaxP -> MaxP = 2

*/

function maxProduct(nums) {
    // console.log(nums);
    len = nums.length;

    //Edge case -> if len == 1
    if (len == 0) {
        maxP = 0
    } else if (len == 1) {
        maxP = nums[0];
    } else {
        positiveP = nums[0];
        negativeP = nums[0];
        maxP = nums[0];
        
        // console.log('positiveP',positiveP, 'negativeP', negativeP, 'maxP', maxP )
        for (let i = 1; i < len; i++) {

            temp = positiveP;

            // console.log('+P', positiveP, '-P', negativeP, 'array:', nums[i]);

            // Determine running total for positive P & negative P for given part of the array
            positiveP = Math.max(positiveP * nums[i], negativeP * nums[i], nums[i])
            negativeP = Math.min(temp * nums[i], negativeP * nums[i], nums[i]);
            
            // console.log('New +P', positiveP, 'New -P', negativeP);

            maxP = Math.max(positiveP, maxP)
            // console.log('New MaxP', maxP);
        }
    }
    return maxP
};

console.log(maxProduct([-5]));