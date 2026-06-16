/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        if (!head) {
            return null
        }
        let listLength = 0
        let p1 = head
        while (p1) {
            listLength++
            p1 = p1.next
        }
        p1 = head
        let targetNodeIndex = listLength - n
        let count = 0
        if (targetNodeIndex == 0) {
            return head.next
        }
        while (p1 !== null && p1.next !== null) {
            if (count === targetNodeIndex - 1) {
                p1.next = p1.next.next
                break;
            }
            else {
                count++
                p1 = p1.next
            }
        }
        return head
    }
}
