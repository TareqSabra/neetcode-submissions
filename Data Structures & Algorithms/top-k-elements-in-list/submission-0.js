class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const records = {}
        nums.forEach((num) => {
            if (!records[num]) {
                records[num] = 1
            }
            else {
                records[num] = records[num] + 1
            }

        })
        const sortedValues = Object.values(records).sort((a, b) => b - a).slice(0, k)
        return Object.keys(records).filter(key => sortedValues.includes(records[key]))
    }
}
