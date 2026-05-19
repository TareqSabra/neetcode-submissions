class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let i = 0;
        const multiArray = [];
        
        if (nums.length === 0) return [];
        
        // Loop through each element in the array one by one
        while (i <= (nums.length - 1)) {
            let multi = 1;
            
            // FIX 1: Use 'j' as the loop variable, not 'i'
            // FIX 2: Increment 'j++', not 'i++'
            for (let j = 0; j < nums.length; j++) {
                
                // If we are looking at the current element, skip it
                if (i === j) continue;
                
                // Multiply the other elements together
                multi = multi * nums[j];
            }
            
            // Push the final product for position 'i' into our result array
            multiArray.push(multi);
            
            // Move to the next position
            i++;
        }
        
        // FIX 3: You must explicitly return the final array!
        return multiArray;
    }
}