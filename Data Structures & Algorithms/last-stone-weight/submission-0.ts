class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        while(stones.length>1){
            const sortedStones = stones.sort((a,b)=>a-b)
            const x = sortedStones.pop()!
            const y = sortedStones.pop()!
            if(x!=y){
               stones.push(x-y) 
            }
        }
       return stones.length === 1 ? stones[0] : 0;

    }
}
