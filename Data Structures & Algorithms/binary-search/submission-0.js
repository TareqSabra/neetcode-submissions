class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            const middleEelemntIndex = Math.floor((low + high) / 2);
            const currentGuess = nums[middleEelemntIndex]
            if (target == currentGuess) {
                return middleEelemntIndex
            }
            if (target < currentGuess) {
                high = middleEelemntIndex -1
            }
            if (target > currentGuess) {
                low = middleEelemntIndex + 1
            }
        
        }
        return -1
    }
}
