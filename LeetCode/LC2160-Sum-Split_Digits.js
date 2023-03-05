/* 

You are given a positive integer num consisting of exactly four digits. 
Split num into two new integers new1 and new2 by using the digits found in num. 
Leading zeros are allowed in new1 and new2, and all the digits found in num must be used.

For example, given num = 2932, you have the following digits: two 2's, one 9 and one 3. 
Some of the possible pairs [new1, new2] are [22, 93], [23, 92], [223, 9] and [2, 329].
Return the minimum possible sum of new1 and new2.

Example 1:

Input: num = 2932
Output: 52
Explanation: Some possible pairs [new1, new2] are [29, 23], [223, 9], etc.
The minimum sum can be obtained by the pair [29, 23]: 29 + 23 = 52.
Example 2:

Input: num = 4009
Output: 13
Explanation: Some possible pairs [new1, new2] are [0, 49], [490, 0], etc. 
The minimum sum can be obtained by the pair [4, 9]: 4 + 9 = 13.
 

Constraints:

1000 <= num <= 9999

*/

/* Pesudeo Code

Org Num is 4 digits, split digits to find lowest interger
Split number into 4 digits
How to make all possible combinations of digits?
Leading zeros are fine -> 1000 could be 00 + 01 = 1

Idea:
- Look for two digits, should be lower than 3 digit + 1 digit

9999 -> 99 + 99 = 198 vs 999 + 9 = 1008


// Solution
Break into two numbers, two points from the start and end
Time Complexity (4log(4))
Space Complexity (4)
*/

var minimumSum = function(num) {
    // Split 4 digit into array of digits
    numArray = num.toString().split('')
    numArray.sort()
    // console.log(numArray);

    // Intialize pointers at start and end
    startP = 0;
    endP = numArray.length - 1;
    sumTotal = 0

    // Iterate over array to create 2 two-digit numbers and their sum
    while (startP < endP) {
        // console.log(numArray[startP], numArray[endP])
        typeNum = numArray[startP] + numArray[endP]
        sumTotal += parseInt(typeNum)
        // console.log(sumTotal)
        startP++
        endP--
    }
    console.log(sumTotal)
    return sumTotal
};

minimumSum(2923)