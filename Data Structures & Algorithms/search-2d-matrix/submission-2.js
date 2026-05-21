
function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1
    while (start <= end) {
        let midIndex = Math.floor((start + end) / 2)
        const currentGuess = array[midIndex]
        if (currentGuess === target) {
            return 1
        }
        if (target < currentGuess) {
            end = midIndex - 1
        }
        if (target > currentGuess) {
            start = midIndex + 1
        }
    }
    return 0
}

class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    searchMatrix(matrix, target) {
        for (const array of matrix) {
            const isFound = binarySearch(array, target)
            if (isFound) {
                return true
            }
        }
        return false
    }
}
