/*53. Maximum Subarray

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104 */

/* /* Brute Force Method

Iterate over array, starting with array[0]
- For each index of the array, create empty runningSum array
- Add array[i] + array[i + 1].... and push sums to runningSum array
- After iterating over array, find maximum value,
- Return start at new index i+1 and repeat

Example: [-2,1,-3,4,-1,2,1,-5,4]
RunSum:      -1,-4,0,-1,1,2,-3,1 -> Max value = 2 for starting at array[0]

Time: O(n * (n-1)) 

Different idea:
Create new array equal to difference of each index (array[i] - array[i+1]), array[i+1] - array[i+2], ....)
Look over difference of array, doing running total, find where highest sum is 

Example: [-2,1,-3,4,-1,2,1,-5,4]  -> O (N/2)
DiffArray:   [-1,-2,1,3, 1, 1, -4, -1] -> O (N)

// If length > 1, else return maxSum = array[0]
// Create new array equal to add each adjacent array to each other
// Set maxSum = DiffArray[0]
// Iterate over DiffArray, starting at i = 1
//	if DiffArray[i] > negative, skip to next index
// 	if DiffArray[i] >= maxSum, set maxSum = DiffArray[i],maxSum += DiffArray[i] until next DiffArray[i] < maxSum
//	Repeat logic until looked at entire DiffArray
// 	Return maxSum

// Check manually
maxSum = -1
DA = -2, skip,
DA = 1, set to new maxSum, = 1, check next numbers
DA = 3, add to maxSum = 4, check next
DA = 1, add to maxSum = 5, check next
DA = 1, add to maxSum = 6, check next
DA = -4, skip
Da = -1, skip
return maxSum = 6

// Check
nums = [5,4,-1,7,8]
DiffArray = [-1, 3, 6, 15]
maxSum = -1 + 3 + 6 + 15 = 23

// Check 
nums = [1] -> length == 1 -> maxSum = 1

// Check
*/

/* 
Kadane's Algorithm

Define two-variable currSum which stores maximum sum ending here and maxSum which stores maximum sum so far.
Initialize currSum with 0 and maxSum with INT_MIN.
Now, iterate over the array and add the value of the current element to currSum and check
If currSum is greater than maxSum, update maxSum equals to currSum.
If currSum is less than zero, make currSum equal to zero.
Finally, print the value of maxSum.
*/


var maxSubArray = function(nums) {
	curSum = 0;
	maxSum = Math.max(...nums)
    // console.log('Initialize maxSum: ', maxSum)
	for (let i = 0; i < nums.length; i++) {
        curSum = curSum + nums[i];
        // console.log('Check curSum vs maxSum:', curSum, 'vs: ', maxSum);
		if (curSum > maxSum) {
			maxSum = curSum
            // console.log('maxSum now: ', maxSum);
        } else if (curSum < 0) {
            curSum = 0;
            // console.log('reset curSum', curSum);
        }
    }
    return maxSum
}


console.log(maxSubArray([-2,1]));