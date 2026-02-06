function ListNode(val, next){
this.val = val === undefined ? 0 : val
this.next = next === undefined ? null : next
}

function func(head , n){
    let dummy = {val : 0 , next : head}
    let fast = dummy;
    let slow = dummy ;

    for (let i =0 ; i<= n ; i++){
        if(!fast){return head}
        fast = fast.next
    }
    while(fast){
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next;
    return slow.next;

}
// console.log(func([1,2,3,4,5], 2))
let node5 = new ListNode(5)
let node4 = new ListNode(4, node5)
let node3 = new ListNode(3, node4)
let node2 = new ListNode(2, node3)
let head = new ListNode(1, node2)

head = func(head, 2)

console.log(func(head, 2))

// let current = head
// let list = []
// while(current){
//     list.push(current.val)
//     current = current.next
// }
// console.log(list.join("->>"))