/*

https://leetcode.com/problems/palindrome-number/
Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

Constraints:

-2^31 <= x <= 2^31 - 1

*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Special cases for negative or 0
    if (x < 0) {
        return false
    } else if (x == 0 ) {
        return true
    }
    
    // determine number length
    let num = x
    let len = 0
    while (num >= 1) {
        len += 1;
        num = num / 10;
    }
    
    // check for even or odd length numbers

    if (len == 1) {
        return true 
    } else {
        let numArray = x.toString().split("").map(Number);
        let i = 0;
        if (len % 2  == 0) { // if length is even
            while (i <= (len / 2)) {
                if (numArray[i] != numArray[(len -1) - i]) {
                    return false
                }
                i++
            }
            //If all numbers pass then true
            return true
        } else { // if Length iss odd
            while (i <= (len -1)/2 ) {
                if (numArray[i] != numArray[(len - 1) - i]) {
                    return false
                }
                i++
            }
            // If all numbers pass then ture
            return true
        }
    }
};