class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let length = nums.length
        let left = 0
        let right = length - 1
        while (left <= right) {
            const midIndex = Math.floor((left + right) / 2)
            const midElement = nums[midIndex]
            if (target === midElement) {
                return midIndex
            }
            else if (midElement > target) {
                right = midIndex - 1
            }
            else {
                left = midIndex + 1
            }
        }
        return -1
    }
}