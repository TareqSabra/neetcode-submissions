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
        const priorityQ = new MinPriorityQueue(x => x[1])

        Object.keys(count).forEach((key)=>{
            priorityQ.enqueue([key,count[key]])
            if(priorityQ.size()>k) priorityQ.dequeue()
        })
        const result = [] 
        for (let i = 0 ; i<k ; i++){
            const [number,_] = priorityQ.dequeue()
            result.push(number)
        }
        return result
    }
}
