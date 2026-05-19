class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
    const leftMulti = []
    const rightMulti = []
    const result = []
    for(let i = 0 ; i<nums.length; i++){
        if(i === 0){
            leftMulti[i] = 1
        }
        else {
            leftMulti[i] =  nums[i-1] * leftMulti[i-1]
        }
    }
        for(let i = nums.length-1 ; i>=0; i--){
        if(i === nums.length-1 ){
            rightMulti[i] = 1
        }
        else {
            rightMulti[i] =  nums[i+1] * rightMulti[i+1]
        }
    }
    for (let i = 0; i < nums.length; i++) {
            result[i] = leftMulti[i] * rightMulti[i];
        }

        return result;

    }
}