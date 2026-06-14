class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0
        let right = nums.length - 1
        let res = nums[0]
        while (left <= right) {
            if (nums[left] < nums[right]) {
                res = Math.min(res, nums[left])
                break
            }
            let middleIndex = Math.floor((right + left) / 2)
            res = Math.min(res, nums[middleIndex])
            if (nums[middleIndex] >= nums[left]) {
                left = middleIndex + 1
            }
            else {
                right = middleIndex - 1
            }
        }
        return res
    }
}
