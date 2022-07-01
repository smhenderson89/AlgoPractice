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
while L is < 0 && index[R] > index[L]
    R + L = join (J) // Game of Thrones
    create subarray from locations of R & L
    subArray = array.slice(index of L, index of R)
    if subArray.includes(join)
        then found triplet
            check triplet for duplicate
            reduce index of R, repeat for extra matches
    else if (join > 0 )
        reduce index of R, check for matches
    else if (join < 0)
        move R down, check for matches



*/

var threeSum = function (nums) {
    output = []; // Found triplets
    len = nums.length;
    if (len >= 3) {
        nums = nums.sort((a, b) => a - b); // sort the array
        console.log(nums);
        // split into two sub arrays
        l = 0 // left
        r = len - 1 // right, initialized
        r = 3;
        // while (l < 0 && r > l) {}
        join = -(nums[l] + nums[r])
        console.log('l', nums[l], 'r', nums[r], 'join', join)
        subNums = nums.slice(l, r)
        if(subNums.includes(join)) {
            found = [nums[l], nums[r], join]
            if (!output[-1] == found) {
                console.log('new triplet found')
                output.push([nums[l], nums[r], join])
                console.log(output);
            } else {
                console.log('duplicate triplet, skip')
            }
        } else if (join > 0 && r > (l + 1)) {
            r -= 1;
            console.log('New r',r);
        } else if (join < 0 && r > (l + 1)) {
            r -= 1;
            console.log('New r')
        } else if (r = (l + 1)) {
            // reset r, advance l interger
            r = len - 1;
            l++
            console.log('reset r, adavnce l')
        }
    } else {
        // If Array is less than 3 long, return empty array
        return output;
    }
    console.log('Triplets found');
    return output;
  };

console.log(threeSum([-1,0,1,2,-1,-4]));
