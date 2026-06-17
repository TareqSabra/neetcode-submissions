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
     * @param {TreeNode}
     * []}
     */
    levelOrder(root) {
        if (!root) {
            return []
        }
        const levelQueue = [root]
        const result = []

        while (levelQueue.length) {
            const levelSize = levelQueue.length
            const level = []
            for (let i = 0; i < levelSize; i++) {
                const node = levelQueue.shift()
                levelQueue.push(...[node.left,node.right].filter(Boolean))
                level.push(node.val)
            }
            result.push(level)
        }
        return result
    }
}
