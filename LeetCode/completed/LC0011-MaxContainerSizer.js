/* Leetcode #11 - Max Container
Link: https://leetcode.com/problems/container-with-most-water/


You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 10**5
0 <= height[i] <= 10**4

Test

[1,8,6,2,5,4,8,3,7] -> max is 49
[2,3,4,5,18,17,6] -> max is 17

-------Code ------

*/ 

var maxArea = function(height) {
    output = 0
    let i = 0
    let j = height.length - 1

    // while left index pointer is less than right index pointer
    while (i < j) {
        shortLine = Math.min(height[i], height[j])
        // Update output for either local area or keep existing
        output = Math.max(output, shortLine * (j - i))

        // Look for next smallest width
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return output
};

console.log(maxArea([2,3,4,5,18,17,6]))


