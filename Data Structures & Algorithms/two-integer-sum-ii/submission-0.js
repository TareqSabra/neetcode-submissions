class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
twoSum(numbers, target) {

    let startingIndex = 0;
    let endingIndex = numbers.length - 1;

    while (startingIndex < endingIndex) {

        const sum = numbers[startingIndex] + numbers[endingIndex];

        if (sum === target) {
            return [startingIndex +1, endingIndex+1];
        }

        if (sum < target) {
            startingIndex++;
        } else {
            endingIndex--;
        }
    }
}
}
