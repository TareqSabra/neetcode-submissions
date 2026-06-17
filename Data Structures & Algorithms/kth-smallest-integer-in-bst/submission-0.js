class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        if (!root) {
            return 0
        }
        let n = 0
        let stack = [root]
        const visited = new Set()

        while (stack.length) {
            const node = stack[stack.length - 1]

            if (node.left && !visited.has(node)) {
                visited.add(node)
                stack.push(node.left)
                continue;
            }
            const poppedNode = stack.pop()
            n++
            if (n == k) {
                return poppedNode.val
            }
            if (poppedNode.right) {
                stack.push(poppedNode.right)

            }
        }
        return 0
    }
}