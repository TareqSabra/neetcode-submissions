class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = []
        for (let i = 0; i < nums.length; i++) {
            if (0 < i && nums[i] === nums[i - 1]) {
                continue;
            }
            let left = i + 1, right = nums.length - 1
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum === 0) {
                    res.push([nums[i], nums[left], nums[right]])
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === left[right - 1]) right--;
                    left++, right--;
                }
                else if (sum < 0) left++;  // Too small -> go right
                else right--;             // Too big -> go left
            }

        }
        return res
    }
}
