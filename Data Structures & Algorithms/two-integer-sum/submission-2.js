class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // a + b = target
        const map = {}
        for (const index in nums) {
            const remainder = target - nums[index]
            if (map[remainder]) {
                return [Number(map[remainder]), Number(index)]
            }

            map[nums[index]] = index


        }

    }
}
