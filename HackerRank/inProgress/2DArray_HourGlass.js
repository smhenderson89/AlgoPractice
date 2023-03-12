/* 

https://www.hackerrank.com/challenges/2d-array/problem?isFullScreen=true&h_r=next-challenge&h_v=zen

Given a  2D Array, :

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
An hourglass in  is a subset of values with indices falling in this pattern in 's graphical representation:

a b c
  d
e f g
There are  hourglasses in . An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum. The array will always be .

Example


-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
The  hourglass sums are:

-63, -34, -9, 12, 
-10,   0, 28, 23, 
-27, -11, -2, 10, 
  9,  17, 25, 18
The highest hourglass sum is  from the hourglass beginning at row , column :

0 4 3
  1
8 6 6
Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

Function Description

Complete the function hourglassSum in the editor below.

hourglassSum has the following parameter(s):

int arr[6][6]: an array of integers
Returns

int: the maximum hourglass sum
Input Format

Each of the  lines of inputs  contains  space-separated integers .

Constraints

Output Format

Print the largest (maximum) hourglass sum found in .

Sample Input

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0
Sample Output

19
Explanation

 contains the following hourglasses:

image

The hourglass with the maximum sum () is:

2 4 4
  2
1 2 4

*/

function hourglassSum(arr) {
    // Iterate over arr
        // Find the hourglass arrays
        let hgNumbers= []
        let list = []
        let sum = 0;
        let max = -100;
        
        for (let i = 0; i <= (arr.length - 3); i++) {
            for (let j = 0; j <= (arr[i].length - 3); j++) {
                // Find values of the array
                let a = arr[i][j]; 
                let b = arr[i][j+1];
                let c = arr[i][j+2];
                let d = arr[i+1][j+1];
                let e = arr[i+2][j];
                let f = arr[i+2][j+1];
                let g = arr[i+2][j+2];
                hgNumbers = [a, b, c, d, e, f, g];
                // console.log(hgNumbers);
                
                // // Count sum of each HourGlass
                let sum = 0; // reset sum
                for (let k = 0; k < hgNumbers.length; k++) {
                    sum += hgNumbers[k]
                }

                list.push(sum);

                // Check if sum is current highest
                if (sum > max) {
                    console.log(`${sum} is bigger than ${max}`);
                    max = sum;
                    console.log(`New Max is ${max}`);
                } // else ignore
            }
        }

        // console.log(list);

        // console.log(max);
        return max;



}

let arr = [[1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]];
hourglassSum(arr)