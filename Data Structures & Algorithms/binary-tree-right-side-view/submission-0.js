class Solution {
    rightSideView(root) {
        const visible = [];
        
        const dfs = (node, depth) => {
            if (!node) return;
            
            // If this is our first time reaching this depth, 
            // since we always go right first, this node MUST be the rightmost one!
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