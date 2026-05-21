class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let startIndex = 0
        let endIndex = 1
        // Note: LeetCode tests are case-sensitive ("pWk" !== "pwK"). 
        // Removing .toLocaleLowerCase() will make it pass all test suites!
        const stringArray = s.split('')
        let maxCount = 0
        let currentMax = 0

        // If the string has only 1 character, the while loop won't run, 
        // so we prime maxCount to 1 if the array isn't empty.
        if (stringArray.length > 0) {
            maxCount = 1;
            currentMax = 1;
        }

        while (endIndex < stringArray.length) {
            const currentWindow = stringArray.slice(startIndex, endIndex)
            
            if (currentWindow.includes(stringArray[endIndex])) {
                // Fix 1: Slide startIndex up by 1 to shrink the window,
                // rather than teleporting it all the way to endIndex.
                startIndex++
                
                // Fix 2: Re-calculate currentMax based precisely on the new window size
                currentMax = endIndex - startIndex
            } else {
                // It's a brand new unique character! Expand our window tracking.
                currentMax++
                endIndex++
            }

            // Keep updating the absolute peak window size seen
            if (currentMax > maxCount) {
                maxCount = currentMax
            }
        }

        return maxCount
    }
}