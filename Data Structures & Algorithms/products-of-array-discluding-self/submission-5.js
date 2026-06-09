class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const leftArray = new Array(len);
        const rightArray = new Array(len);
        leftArray[0] = 1;
        for (let i = 1; i < len; i++) {
            leftArray[i] = leftArray[i - 1] * nums[i - 1];
        }
        rightArray[len - 1] = 1;
        for (let j = len - 2; j >= 0; j--) {
            rightArray[j] = rightArray[j + 1] * nums[j + 1];
        }
        const finalArray = leftArray.map((leftVal, index) =>
            leftVal * rightArray[index]
        );
        return finalArray
    }
}
