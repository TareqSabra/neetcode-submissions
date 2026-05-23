/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {
        this.invert(root)
        return root

    }
    invert(head) {
        if (!head) {
            return null;
        }
        let temp = head.left
        head.left = head.right
        head.right = temp
        this.invert(head.left)
        this.invert(head.right)

    }
}
