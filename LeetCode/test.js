// Linked Lists example
l1 = [1,2,4] 
l2 = [1,3,4]
l3 = [1,1,2,3,4,4]

class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

// set head of LinkedList
// Working on set up for loop for a linkedList Loop in JS, next steps

node1 = new ListNode()

// for (let i = 0; i < (l3.length - 1); i++) {
//     tempNode = new ListNode(l3[i], l3[i+1])

// }

// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/