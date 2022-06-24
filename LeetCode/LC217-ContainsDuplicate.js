/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 10**5
-10**9 <= nums[i] <= 10**9 */

var containsDuplicate = function(nums) {
	// Create empty hash array, fill spaces with null
	len = nums.length
	hash = new Array(len).fill(null) 

	// Iterate over nums array 
	for (let i = 0; i < len; i++) {
		// Insert nums[i] into hash array
		insertIndex = nums[i]
        // console.log('insertIndex, ', insertIndex, 'value:', nums[i]);
		if (hash[insertIndex] == null) {
            // console.log('insert into hash');
			hash[insertIndex] = insertIndex
            // console.log(hash);
        } else { // If attempt to insert at already filled spot
            // console.log("@i:",i, 'value: ', insertIndex);
            // console.log('hash conflict');
	        return true
        }
    }
// console.log('array is unique');
return false
};


console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
