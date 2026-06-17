class Solution {
    rightSideView(root) {
        const visible = [];
        
        const dfs = (node, depth) => {
            if (!node) return;

            if (depth === visible.length) {
                visible.push(node.val);
            }

            dfs(node.right, depth + 1);
            dfs(node.left, depth + 1);
        };
        
        dfs(root, 0);
        return visible;
    }
}