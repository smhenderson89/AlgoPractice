/* 

2570. Merge Two 2D Arrays by Summing Values
Easy
176
6
Companies
You are given two 2D integer arrays nums1 and nums2.

nums1[i] = [idi, vali] indicate that the numsber with the id idi has a value equal to vali.
nums2[i] = [idi, vali] indicate that the number with the id idi has a value equal to vali.
Each array contains unique ids and is sorted in ascending order by id.

Merge the two arrays into one array that is sorted in ascending order by id, respecting the following conditions:

Only ids that appear in at least one of the two arrays should be included in the resulting array.
Each id should be included only once and its value should be the sum of the values of this id in the two arrays. If the id does not exist in one of the two arrays then its value in that array is considered to be 0.
Return the resulting array. The returned array must be sorted in ascending order by id.


Example 1:

Input: nums1 = [[1,2],[2,3],[4,5]], nums2 = [[1,4],[3,2],[4,1]]
Output: [[1,6],[2,3],[3,2],[4,6]]
Explanation: The resulting array contains the following:
- id = 1, the value of this id is 2 + 4 = 6.
- id = 2, the value of this id is 3.
- id = 3, the value of this id is 2.
- id = 4, the value of this id is 5 + 1 = 6.
Example 2:

Input: nums1 = [[2,4],[3,6],[5,5]], nums2 = [[1,3],[4,3]]
Output: [[1,3],[2,4],[3,6],[4,3],[5,5]]
Explanation: There are no common ids, so we just include each id with its value in the resulting list.
 

Constraints:

1 <= nums1.length, nums2.length <= 200
nums1[i].length == nums2[j].length == 2
1 <= idi, vali <= 1000
Both arrays contain unique ids.
Both arrays are in strictly ascending order by id.
*/

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    /* Each array is already sorted by ID in ascending order 
    Look at each array by index value

    Determine which array is longer, or if they are both same size, use array 1

    if array1[i][0] and array2[j][0] are equal, then combine the values for the resultant array
    if array1[i][0] don't exist in array2[j][0], or vice versa, then include just that value in the new array
    reutrn the new array
    */

    let mergeArray = [];
    let len1 = nums1.length;
    let len2 = nums2.length;

    // Iterate over each array while either of the arrays length is less than their max length

    let i = 0; // pointer for nums1
    let j = 0; // pointer for nums2

    console.log(`len1: ${len1}, len2: ${len2}`);
    // let k = 1;
    while (i < len1 || j < len2) {
        // console.log(`i: ${i}, len1: ${len1}, j: ${j}, len2: ${len2} `)
        if (i == len1) {
            // console.log('len1 reached');
            mergeArray.push([nums2[j][0], nums2[j][1]])
            // console.log(`j : ${j}, len2 : ${len2}`);
            j++;
        } else if (j == len2) {
            // console.log('len2 reaced');
            mergeArray.push([nums1[i][0], nums1[i][1]])
            i++;
        } else {
            if (nums1[i][0] == nums2[j][0]) {
                let sum = nums1[i][1] + nums2[j][1];
                mergeArray.push([nums1[i][0], sum])
                // console.log(mergeArray)
                i++, j++;
            } else if (nums1[i][0] != nums2[j][0]) {
            // Compare index array values, use the lower array value
                if (nums1[i][0] < nums2[j][0]) {
                    // use nums1array, advance i index
                    mergeArray.push([nums1[i][0], nums1[i][1]]);
                    i++;
                    // console.log(mergeArray)
                } else {
                    // use numss2array, advance j index
                    mergeArray.push([nums2[j][0], nums2[j][1]]);
                    j++;
                    // console.log(mergeArray)
                }
            }
        }  
    }
    // console.log(`End Variables: j : ${j}, len2: ${len2}`);
    return(mergeArray)
};

let nums1 = [[148,597],[165,623],[306,359],[349,566],[403,646],[420,381],[566,543],[730,209],[757,875],[788,208],[932,695]];
let nums2 = [[74,669],[87,399],[89,165],[99,749],[122,401],[138,16],[144,714],[148,206],[177,948],[211,653],[285,775],[309,289],[349,396],[386,831],[403,318],[405,119],[420,153],[468,433],[504,101],[566,128],[603,688],[618,628],[622,586],[641,46],[653,922],[672,772],[691,823],[693,900],[756,878],[757,952],[770,795],[806,118],[813,88],[919,501],[935,253],[982,385]];
mergeArrays(nums1, nums2)
