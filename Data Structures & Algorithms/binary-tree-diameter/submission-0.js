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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter = 0

        const findDiameter = (node) => {
            if (!node) {
                return 0
            }
            const leftDiameter = findDiameter(node.left)
            const rightDiameter = findDiameter(node.right)
            diameter = Math.max(diameter,leftDiameter+rightDiameter)

            return 1 + Math.max(leftDiameter,rightDiameter)

        }
        findDiameter(root)
        return diameter
    }
}
