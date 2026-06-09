class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqeSet = new Set(nums)
        let maxStreak = 0;
        for (let number of uniqeSet) {
            if (!uniqeSet.has(number - 1)) {
                let currentNum = number
                let currentStreak = 1;
                while (uniqeSet.has(currentNum + 1)) {
                    currentStreak++
                    currentNum++
                }
                maxStreak = Math.max(maxStreak, currentStreak);
            }

        }
        return maxStreak
    }
}
