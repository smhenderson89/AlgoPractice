/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null; // previous node set intially to null
    let curr = head; // set current node to the head
    let nextTemp = null; // intialize next Temp as null
    
    while(curr != null) {
        nextTemp = curr.next // temporary variable for nextValue
        curr.next = prev // reverse pointer of current to previous
        prev = curr; // previous node becomes current node
        curr = nextTemp; // curr moves over to the temp node
    }

    return prev // Return the previous node as the while loop will end before curr is assigned 
    
};