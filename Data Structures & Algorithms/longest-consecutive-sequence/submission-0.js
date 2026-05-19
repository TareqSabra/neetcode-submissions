class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        // 1. Sort the numbers
        const sortedNums = nums.sort((a, b) => a - b);
        
        // 2. Remove duplicates by converting back to an array
        // Array.from(Set) turns our unique items back into a readable list
        const uniqueSorted = Array.from(new Set(sortedNums));
        
        let maxStreak = 1;  // Tracks the absolute longest sequence we found
        let currentStreak = 1; // Tracks the current running sequence

        // 3. Single loop: Compare each number to its immediate neighbor
        for (let i = 0; i < uniqueSorted.length - 1; i++) {
            
            // If the next number is exactly 1 greater, our streak continues!
            if (uniqueSorted[i + 1] === uniqueSorted[i] + 1) {
                currentStreak++;
            } 
            // Otherwise, the sequence broke! Reset current streak back to 1
            else {
                // Save the biggest streak we've seen before resetting
                maxStreak = Math.max(maxStreak, currentStreak);
                currentStreak = 1;
            }
        }

        // Final check in case the longest streak went all the way to the end
        return Math.max(maxStreak, currentStreak);
    }
}