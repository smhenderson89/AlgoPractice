/* 
LeetCode Logo
Problem List
Premium
0

avatar
70. Climbing Stairs
Easy
19.6K
639
Companies
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step



*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result = 0;
    if (n == 1) {
        return 1
    } else if (n ==2 ) {
        return 2
    } else { // if not simple case

        // Set intial case of n(1) and n(2) to "a" and "b"
        a = 1;
        b = 2;
        
        for (let i = 3; i <= n; i++) {
            let c = a + b; // let path of adjacent number equal sum of previous paths
            a = b; // move up first number
            b = c; // move up second number
            console.log(`Values of a, b, c are: ${a}, ${b}, ${c}`)
        }
        console.log(b)
        return b
    }
};

climbStairs(5)