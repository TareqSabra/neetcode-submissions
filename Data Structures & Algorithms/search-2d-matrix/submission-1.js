class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */

    binarySearch(array,target){

    }
    searchMatrix(matrix, target) {
        for(const array of matrix){
            if (array.includes(target)){
                return true
            }
        }
        return false
    }
}
