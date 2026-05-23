class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []
        const subSet = []
        this.difs(nums, 0, subSet, result)
        return result;
    }


    difs(nums, i, subSet, result) {
        if (i >= nums.length) {
            result.push([...subSet])
            return;
        }
        subSet.push(nums[i])
        this.difs(nums,i+1,subSet,result)
        subSet.pop()
        this.difs(nums,i+1,subSet,result)
    }
}
