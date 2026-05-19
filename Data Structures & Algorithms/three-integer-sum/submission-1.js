class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b)
        const output = [];
        for (let i = 0; i < sortedNums.length - 2; i++) {
            if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
                continue;
            }
            let left = i + 1;
            let right = sortedNums.length - 1;
            while (left < right) {
                const sum = sortedNums[i] + sortedNums[left] + sortedNums[right]
                if (sum === 0) {
                    output.push([sortedNums[i], sortedNums[left], sortedNums[right]])
                    left++
                    right--
                    while (sortedNums[left] === sortedNums[left - 1]) left++;
                    while (sortedNums[right] === sortedNums[right + 1]) right--
                }                                                                                                                                                                                            
               else if (sum < 0) {
                    left++
                }
                else {
                    right--
                }


            }
          
        }
          return output
    }
}

