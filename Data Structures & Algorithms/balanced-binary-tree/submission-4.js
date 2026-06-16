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
     * @return {boolean}
     */
    isBalanced(root) {
        let isBalanced = true

        const findIsBalanced = (node) => {
            if (!node) {
                return 0
            }
            const left = findIsBalanced(node.left)
            const right = findIsBalanced(node.right)
            if ((Math.abs(left - right) > 1)) {
                isBalanced = false

            }

            return 1 + Math.max(left, right)
        }
        findIsBalanced(root)
        return isBalanced
    }
}
