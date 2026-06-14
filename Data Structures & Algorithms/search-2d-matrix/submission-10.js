class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    binarySearch(row, target) {
        let length = row.length
        let left = 0
        let right = length - 1
        while (left <= right) {
            const midIndex = Math.floor((right + left) / 2)
            if (target === row[midIndex]) {
                return true
            }
            else if (target < row[midIndex]) {
                right = midIndex - 1
            }
            else if (target > row[midIndex]) {
                left = midIndex + 1
            }

        }
        return false
    }
    searchMatrix(matrix, target) {
        const flattenMatrix = matrix.flat()
        const isFound = this.binarySearch(flattenMatrix,target)

        return isFound

    }
}
