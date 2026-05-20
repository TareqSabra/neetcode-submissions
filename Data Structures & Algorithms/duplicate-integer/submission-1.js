class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(nums)
        const hasDuplciates = nums.length !==set.size
        return hasDuplciates
    }
}
