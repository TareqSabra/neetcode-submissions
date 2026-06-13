class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    findAreas(left, right, heights) {
        let height = Math.min(heights[left], heights[right])
        let width = right - left;
        let area = height * width;
        return area
    }
    maxArea(heights) {
        let left = 0
        let right = heights.length - 1
        let maxArea = 0
        while (left < right) {
            let area = this.findAreas(left, right, heights)
            if (area > maxArea) {
                maxArea = area
            }
            if (heights[left] > heights[right]) {
                right--
            }
            else {
                left++
            }
        }
        return maxArea

    }
}
