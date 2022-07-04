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

-------Code ------

*/ 

var maxArea = function(height) {

	len = height.length;
	// Initialize maxArea
	// Setup left and right pointers
	i = 0
	j = len - 1
	width = j 
	left = height[i]
	right = height[j]
	output = width * Math.min(height[i], height[j])
    console.log('Inital Area: ', output)
	// while width != 1
	while (width > 1) {
		// check height[i + 1] vs. height[j - 1]
        // determine which new boundary will have a greater area. 
        // If both are equal, than advance left pointer
		
		newLeft = height[i + 1]
		newRight = height[j - 1]
        newLeftArea = Math.min(newLeft, right) * (width - 1)
        newRightArea = Math.min(newRight, left) * (width - 1)

		if (newLeftArea > newRightArea || newLeftArea == newRightArea) {
			i += 1 // advance left pointer index
        } else {
            j -= 1  // advance right pointer index
        }

        // determine new height
        width = j - 1
        localArea = Math.max(newLeftArea, newRightArea)
        console.log('localArea', localArea, 'width', width)
        // console.log('Area chunk:', area, '@ wdith:', width, 'height', minHeight)
		// check if area > maxArea
		if (localArea > output) {
			output = localArea
            console.log('New Area found', output, 'width', width)
        }
    }
    return output 
};

console.log(maxArea([1,0,0,0,0,0,0,2,2]))


