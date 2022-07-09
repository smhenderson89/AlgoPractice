/* binary search example
// Let min = 0 and max = nums.length - 1
// guess = (min + max) / 2
// if nums[guess] == target, then found
// if nums[guess] < target, set min = guess + 1
// if nums[geuss] > target, set max = guess - 1
// repeat until answer found or if min + 1 == max (i.e. answer does not exist)

*/

function binarySearch(nums, target) {
    var min = nums[0];
    var max = nums.length - 1
    var guess = Math.floor((min + max) / 2)

    while (min < max) {
        console.log(nums[guess])
        console.log('min', min, 'max', max)
        if (nums[guess] === target || nums[max] === target || nums[min] === target) {
            if (nums[guess] == target) {
                // If guess index equal target, return index 
                console.log('# found at', guess)
                return guess
            } else if (nums[min] == target) {
                console.log('#min found at', min)
                return min
            } else {
                console.log('#max found at', min)
                return max
            }
        } else if (nums[guess] < target) {
            console.log('#', nums[guess], 'too low')
            min = guess + 1
            guess = Math.floor((min + max) / 2)
        } else {
            console.log('#', nums[guess], 'too high')
            max = guess - 1
            guess = Math.floor((min + max) / 2)
        }
    }
    console.log('min', min, 'max', max)
    console.log('target', target,' DNE in nums')
    return false 
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var test = [2,5]

console.log(binarySearch(test, 5))