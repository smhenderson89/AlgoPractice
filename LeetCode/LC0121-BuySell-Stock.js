/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0. 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 10^5
0 <= prices[i] <= 10^4 */

var maxProfit = function(prices) {
    len = prices.length;
    if (len < 2) {
        return 0
    }
    globalProfit = 0;
    buyIn = prices[0]; // Look at first part of the day

    for (let i = 1; i < len; i++) { // Iterate over the array
        localProfit = prices[i] - buyIn;
        // console.log('Profit:',localProfit, ' ', prices[i], buyIn);
        if (localProfit > globalProfit) {
            globalProfit = localProfit
        }
        if (prices[i] < buyIn) {
            buyIn = prices[i];
            // console.log('New Buy-in', prices[i], "@: ", i);
        }
    }

    return globalProfit
}
    
console.log(maxProfit([1]))