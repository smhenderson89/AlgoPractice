/**
 * https://leetcode.com/problems/merge-two-sorted-lists/
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

var mergeTwoLists = function (list1, list2) {

    function ListNode(val, next) { // Create node function
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }

    // Initialise a new LinkedList with a dummy ListNode
    let newList = new ListNode(0);

    // Maintain a reference to the head of the new LinkedList
    let headOfNewList = newList;

    // Check if list reference valid targets (i.e. have not reached the end of the list)
    while (list1 != null && list2 != null) {
        // Check which val in which list is smaller
        if (list1.val < list2.val) {
            // Add list1's value to the new list
            newList.next = list1;
            console.log('new node', newList.next)
            // Move list1 to point to the next element
            list1 = list1.next;
        } else {
            // Add list2's value to the new list
            newList.next = list2;
            console.log('new node', newList.next)

            // Move list2 to its next element
            list2 = list2.next;
        }

        // Move into the next level of the LinkedList for the next iteration
        newList = newList.next;
    }

    // If list1 has run out of elements
    if (list1 == null) {
        // Append list2 to the new list
        newList.next = list2;
    }
    // If list2 has run out of elements
    else {
        // Append list1 to the new list
        newList.next = list1;
    }

    return headOfNewList.next;
};
// Testing for list 1 & list 2
list1 = {val: 1, next : { val: 2, next: { val: 4, next: null}}}
list2 = {val: 1, next : { val: 3, next: { val: 4, next: null}}}

console.log(JSON.stringify(mergeTwoLists(list1, list2)))

// https://duncan-mcardle.medium.com/leetcode-problem-21-merge-two-sorted-lists-javascript-b5a4de3da319