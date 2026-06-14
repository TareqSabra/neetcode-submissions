class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        if (!matrix || matrix.length === 0 || matrix[0].length === 0) return false;
        const rows = matrix.length;
        const cols = matrix[0].length;
        
        let left = 0;
        let right = (rows * cols) - 1; // Treat it as a flat array of length rows * cols

        // Notice the `<=` here to fix your original bug
        while (left <= right) {
            const midIndex = Math.floor((left + right) / 2);
            
            // Map the 1D index back to 2D coordinates
            const midValue = matrix[Math.floor(midIndex / cols)][midIndex % cols];

            if (target === midValue) {
                return true;
            } else if (target < midValue) {
                right = midIndex - 1;
            } else {
                left = midIndex + 1;
            }
        }

        return false;
    }
}
