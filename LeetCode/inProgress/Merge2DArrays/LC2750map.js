/* 
https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values/description/
2570. Merge Two 2D Arrays by Summing Values

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
  /* Each array is already sorted by ID in ascending order 
  Look at each array by index value

  */
  combined = {};
  function hashNums(num) {
      const [id, val] = num;
      if (!combined[id]) {
        combined[id] = val
      } else {
        combined[id] += val
      }
  }
  num1.forEach(hashNums);
  num2.forEach(hashNums);

  console.log(combined) // key-value object with key as string

  const pairs = Object.entries(combined);
  console.log(pairs); // Array of Arrays with array[0] value as a string

  pairs.map(pair => {
    const [key, val] = pair
    return [+key, val]
  })

  console.log(pairs); // array[0] is still a string
}

let num1 = [[2,4],[3,6],[5,5]];
let num2 = [[1,3],[4,3]];
mergeArrays(num1, num2)

