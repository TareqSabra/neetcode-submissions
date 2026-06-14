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
        let right = (rows * cols) - 1;

        while (left <= right) {
            const midIndex = Math.floor((left + right) / 2);
   
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
