class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for (const num of nums) {
            count[num] = (count[num] || 0) + 1
        }
    const priorityQ = new MaxPriorityQueue(x => x[1]);
        Object.keys(count).forEach((key) => {
            priorityQ.enqueue([key, count[key]])

        })
        const result = []
        for (let i = 0; i < k; i++) {
        result.push(priorityQ.dequeue()[0]);
        }
        return result
    }
}
