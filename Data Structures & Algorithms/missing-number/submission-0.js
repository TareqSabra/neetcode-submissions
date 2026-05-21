class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let n = nums.length
        let XOR = n
        for (let i = 0 ; i <n;i++){
            XOR ^=i^nums[i]
        }
        return XOR
    }
}
