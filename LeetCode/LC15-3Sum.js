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
// 	Sort nums array least to greatest
// 	Split nums into two seperate arrays. If len is odd number, then choose left array to be smaller
// Looking for x + y + z = 0, therefore, x + y = -z

// foundTriplet = []
// On the array that is shorter/left array
// Iterate over leftArrary length (for loop)

// let (-z) to be leftArray[i]
// let x = rigthArray[i]
// Does z - x = "y", does that exist within rightArray[i]?
	// If yes, then possible triplet found
	// Triplet = [leftArray[i], rightArray[i], foundnumber(RightArray[i])
		// Check that triplelet isn't a duplicate
// Repeat for all numbers within leftArray

*/

var threeSum = function (nums) {
    output = []; // Found triplets
    len = nums.length;
    if (len >= 3) {
        nums = nums.sort((a, b) => a - b); // sort the array
        console.log(nums);
        // split into two sub arrays
        halfLen = Math.floor(len / 2);

        lArray = nums.slice(0, halfLen);
        rArray = nums.slice(halfLen);

        console.log(lArray);
        console.log(rArray);

        // Iterate over lArray, looking for matches
        for (let i = 0; i < lArray.length; i++) {
        z = -nums[i];
        console.log("Checking z:", z);

            // Look for index within rArray that equal
            for (let j = 0; j < rArray.length; j++) {
                // check if corresponding x + y exists
                diff = z - rArray[j];
                console.log('diff:', diff);
                if (rArray.includes(diff)) {
                    yIndex = rArray.indexOf(diff)
                    if (yIndex != j) {
                        // Determine if triplets already exists
                        test = [lArray[i], rArray[j], diff];
                        test = test.sort()
                        if (!output.includes(test)) {
                            output.push(test);
                            console.log(output)
                        }
                    }
                } 
            }
    }
    console.log('End of search:')
    return output;
  } else {
    // If Array is less than 3 long, return empty array
    return output;
  }
};

console.log(threeSum([-1,0,1,2,-1,-4]));
