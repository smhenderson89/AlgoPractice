/* https://leetcode.com/problems/remove-linked-list-elements/ 

203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:

Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []

    Given a head and value
    prevNode = None
    currNode = head
    For each node in the list (until LastNode.Pointer != Null)
        Evaluate the value of one node
        Check if that node matches the target value
            If matches, then remove from the linked list
            Remove the pointer from the previous list
            Change pointer to the next value in the list
*/

var removeElements = function(head, val) {
    // create new head at the beginning to 
    dummy = ListNode(-1, head)

    // 
    
};