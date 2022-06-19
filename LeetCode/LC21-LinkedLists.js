/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

/*
 Input: list1 = [1,2,4], list2 = [1,3,4]
 Output: [1,1,2,3,4,4]
 Example 2:
 
 Input: list1 = [], list2 = []
 Output: []
 Example 3:
 
 Input: list1 = [], list2 = [0]
 Output: [0]
 */

 var mergeTwoLists = function(list1, list2) {
    newList = []
    numDigits = list1.length + list2.length;
    // console.log('Num of Digits', numDigits);
         
    for (let i = 0; i < numDigits; i++) {
        // Set value for lowest digits, if list is empty set equal to "skip"
        if (list1.length == 0) {
            low1 = "skip"
        } else {
            low1 = list1[0];
        }

        if (list2.length == 0) {
            low2 = "skip"
        } else {
            low2 = list2[0];
        }  

        // console.log('Checking:', low1, low2);
        if ((low1 === 'skip') && (low2 === 'skip')) { // If both lists are empty, return new list
            return newList
        } else if (low1 < low2 || low1 == low2 || low2 === 'skip') { // if lowest List 1 or are equal
            newList.push(low1) // push low
            list1.shift() // remove lowest from list1
        } else if (low2 < low1 || low1 === 'skip') { // if lowest List 2
            newList.push(low2) // push lowest to array
            list2.shift() // remoe lowest from list2
        }

        // Show Updates
        // console.log('newlist: ', newList);
        // console.log("1: ", list1, "2: ", list2);
        // console.log("Lengths:", list1.length, list2.length);
    } 
    return newList  
};

console.log(mergeTwoLists([1,2,4], [1,3,4]))