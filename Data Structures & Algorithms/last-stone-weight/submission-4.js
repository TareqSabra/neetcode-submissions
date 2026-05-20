class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        while (stones.length > 1) {
            stones.sort((a, b) => a - b);
            const heaviest = stones.pop()
            const secoundHeaviest = stones.pop()
            if (heaviest - secoundHeaviest !== 0) {
                stones.push(heaviest - secoundHeaviest)
            }
        }
        return stones.length === 1 ? stones[0] : 0

    }
}
