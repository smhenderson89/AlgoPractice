// Linked Lists example
l1 = [1,2,4] 
l2 = [1,3,4]
l3 = [1,1,2,3,4,4]

function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
}
list1 = {val: 1, next : { val: 2, next: { val: 4, next: null}}}
list2 = {val: 1, next : { val: 3, next: { val: 4, next: null}}}

console.log(list1.val)
list1 = list1.next
console.log('update list1', list1)